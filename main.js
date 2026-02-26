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

    const newestContainer = document.querySelector(".blog-view-newest");
    const categoryContainer = document.querySelector(
      ".blog-view-categories"
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
        categoryMap.get(category).push(item);
      });

      const sortedCategories = Array.from(categoryMap.keys()).sort((a, b) =>
        a.localeCompare(b, "en", { sensitivity: "base" })
      );

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
  }
});

