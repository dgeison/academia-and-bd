const currentPage = location.pathname;

const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

console.log(currentPage);

const formDelete = document.querySelector("#form-delete");

if (formDelete) {
  currentPage.includes(
    formDelete.addEventListener("submit", function (event) {
      const confirmation = confirm("Deseja deletar?");
      if (!confirmation) {
        event.preventDefault();
      }
    })
  );
}

// Paginação
// totalPages = 20
// selectedPage = 15
// [1, ..., 13, 14, 15, 16, 17,...,20]

function pagination(selectedPage, totalPages) {
  let pages = [],
      oldPage;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

    if (
      firstAndLastPage ||
      (pagesBeforeSelectedPage && pagesAfterSelectedPage)
    ) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push("...");
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1);
      }

      pages.push(currentPage);

      oldPage = currentPage;
    }
  }

  return pages;
}
