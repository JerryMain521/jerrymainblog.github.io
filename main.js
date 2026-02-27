document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const html = document.documentElement;
      const next = html.dataset.theme === "light" ? "dark" : "light";
      html.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const body = document.body;
  if (body.classList.contains("is-blog")) {
    const views = document.querySelectorAll(".blog-view");
    const buttons = document.querySelectorAll("[data-blog-view]");

    const setView = (view) => {
      views.forEach((v) => {
        v.classList.toggle("is-active", v.dataset.view === view);
      });
      buttons.forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.blogView === view);
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.blogView;
        setView(view);
      });
    });

    setView("newest");

    // ── Newest Updated：Pinned 置顶，其余按月分组（最新月在上）──
    const newestView = document.querySelector(".blog-view-newest");
    if (newestView) {
      const grid = newestView.querySelector(".ins-grid");
      if (grid) {
        const allNodes = Array.from(grid.children);

        // 分离 Pinned 和普通文章
        const pinned = [];
        const dated = [];
        allNodes.forEach((node) => {
          const article = node.tagName === "ARTICLE" ? node : node.querySelector("article");
          if (article && article.dataset.category === "Pinned") {
            pinned.push(node);
          } else {
            const date = article?.dataset.date || "";
            dated.push({ node, date });
          }
        });

        // 按月份分组
        const monthMap = new Map();
        dated.forEach(({ node, date }) => {
          const key = date || "Undated";
          if (!monthMap.has(key)) monthMap.set(key, []);
          monthMap.get(key).push(node);
        });

        // 月份降序排序（最新在上），Undated 放最后
        const sortedMonths = Array.from(monthMap.keys()).sort((a, b) => {
          if (a === "Undated") return 1;
          if (b === "Undated") return -1;
          return b.localeCompare(a);
        });

        // 格式化月份标题：YYYY-MM → "Mon. YYYY"
        const formatMonth = (key) => {
          if (key === "Undated") return "Undated";
          const [year, month] = key.split("-");
          const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
                          "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
          const m = parseInt(month, 10);
          return `${months[m - 1]} ${year}`;
        };

        // 清空原 grid，重新填入
        grid.innerHTML = "";

        // 1. Pinned 节点直接放回
        pinned.forEach((node) => grid.appendChild(node));

        // 2. 按月分组插入：月份标题 + 文章卡片
        sortedMonths.forEach((key) => {
          const heading = document.createElement("h3");
          heading.className = "blog-month-heading";
          heading.textContent = formatMonth(key);
          grid.appendChild(heading);

          monthMap.get(key).forEach((node) => grid.appendChild(node));
        });
      }
    }

    const newestContainer = document.querySelector(".blog-view-newest");
    const categoryContainer = document.querySelector(
      ".blog-view-categories"
    );
    const alphabeticalContainer = document.querySelector(
      ".blog-view-alphabetical"
    );
    if (newestContainer && categoryContainer) {
      const items = Array.from(
        newestContainer.querySelectorAll(".blog-item")
      );
      const categoryMap = new Map();

      items.forEach((item) => {
        const category = item.dataset.category || "Uncategorized";
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        const node = item.parentElement.tagName === "A" ? item.parentElement : item;  // ← 改这里
        categoryMap.get(category).push(node);
      });

      const sortedCategories = Array.from(categoryMap.keys()).sort((a, b) => {
        if (a === "Pinned") return -1;
        if (b === "Pinned") return 1;
        return a.localeCompare(b, "en", { sensitivity: "base" });
      });

      sortedCategories.forEach((category) => {
        const posts = categoryMap.get(category);

        const block = document.createElement("section");
        block.className = "blog-category";

        const header = document.createElement("h3");
        header.className = "blog-category-title";
        header.textContent = category;
        block.appendChild(header);

        const list = document.createElement("div");
        list.className = "ins-grid";

        posts.forEach((post) => {
          list.appendChild(post.cloneNode(true));
        });

        block.appendChild(list);
        categoryContainer.appendChild(block);
      });
    }

    // 按字典序（标题 A→Z）视图
    if (newestContainer && alphabeticalContainer) {
      const items = Array.from(
        newestContainer.querySelectorAll(".blog-item")
      );

      const pinned = [];
      const lettered = [];

      items.forEach((item) => {
        const title = item.querySelector(".ins-title")?.textContent.trim() ?? "";
        const node = item.parentElement.tagName === "A" ? item.parentElement : item;
        const isPin = item.dataset.category === "Pinned";
        if (isPin) {
          pinned.push({ title, node });
        } else {
          lettered.push({ title, node });
        }
      });

      // 按标题字典序 A→Z
      lettered.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
      );

      // 按首字母分组
      const letterMap = new Map();
      lettered.forEach(({ title, node }) => {
        const first = title.charAt(0).toUpperCase();
        const key = /[A-Z]/.test(first) ? first : "#";
        if (!letterMap.has(key)) letterMap.set(key, []);
        letterMap.get(key).push(node);
      });

      // 字母排序，# 放最后
      const sortedLetters = Array.from(letterMap.keys()).sort((a, b) => {
        if (a === "#") return 1;
        if (b === "#") return -1;
        return a.localeCompare(b);
      });

      // 1. Pinned 置顶
      if (pinned.length > 0) {
        const pinnedGrid = document.createElement("div");
        pinnedGrid.className = "ins-grid";
        pinned.forEach(({ node }) => pinnedGrid.appendChild(node.cloneNode(true)));
        alphabeticalContainer.appendChild(pinnedGrid);
      }

      // 2. 字母分组
      sortedLetters.forEach((key) => {
        const block = document.createElement("section");
        block.className = "blog-category";

        const heading = document.createElement("h3");
        heading.className = "blog-category-title";
        heading.textContent = key;
        block.appendChild(heading);

        const grid = document.createElement("div");
        grid.className = "ins-grid";
        letterMap.get(key).forEach((node) => grid.appendChild(node.cloneNode(true)));
        block.appendChild(grid);

        alphabeticalContainer.appendChild(block);
      });
    }
  }
});