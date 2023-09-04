function swiperSituationsFunction() {
  const swiperElement = document.querySelector('.situations__sliders.swiper');

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 1,
      width: 120,
      grabCursor: true,
      spaceBetween: 12,
    });

  }
}

function addClassButtonsFunction() {
  const buttons = document.querySelectorAll('.bottom-nav__button');

  if (buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('bottom-nav__button--active'));
        button.classList.add('bottom-nav__button--active');
      });
    });
  }

}

function searchHeaderFunction() {
  const searchForm = document.getElementById('search__header');
  const searchInput = document.getElementById('search__input--id');
  const searchError = document.getElementById('search__error--id');

  if (searchForm, searchInput, searchError) {


    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const searchText = searchInput.value.trim();

      if (searchText.length < 3) {
        searchError.textContent = 'Поисковой запрос должен содержать как минимум 3 символа.';
        return;
      } else {
        searchError.textContent = '';
      }

      try {
        const response = await fetch('https://httpbin.org/post', {
          method: 'POST',
          body: JSON.stringify({ search: searchText }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          alert('Запрос успешно отправлен!');
        } else {
          alert('Ошибка при отправке запроса.');
        }
      } catch (error) {
        alert('Произошла ошибка: ' + error.message);
      }
    });
  }
}

function autoCompleteFunction() {
  const searchInput = document.getElementById('search__input--id');
  const autocompleteResults = document.getElementById('search__results');
  const searchAutocomplete = document.querySelector('.search__autocomplete');
  const autocompleteData = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Node.js',
  ];

  if (searchInput, autocompleteResults, searchAutocomplete, autocompleteData) {
    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.trim().toLowerCase();

      if (searchText.length >= 3) {
        searchAutocomplete.classList.add('search__autocomplete--active');
        autocompleteResults.innerHTML = '';


        const filteredResults = autocompleteData.filter((item) =>
          item.toLowerCase().includes(searchText)
        );


        filteredResults.forEach((result) => {
          const resultItem = document.createElement('li');
          resultItem.classList.add('search__result--item');
          resultItem.textContent = result;
          resultItem.addEventListener('click', () => {
            searchInput.value = result;
            searchAutocomplete.classList.remove('search__autocomplete--active');
            autocompleteResults.innerHTML = '';
          });
          autocompleteResults.appendChild(resultItem);
        });
      } else {
        searchAutocomplete.classList.remove('search__autocomplete--active');
        autocompleteResults.innerHTML = '';
      }
    });


    document.addEventListener('click', (e) => {
      if (!searchAutocomplete.contains(e.target)) {
        searchAutocomplete.classList.remove('search__autocomplete--active');
        autocompleteResults.innerHTML = '';
      }
    });
  }
}

addEventListener("DOMContentLoaded", () => {
  swiperSituationsFunction();
  addClassButtonsFunction();
  searchHeaderFunction();
  autoCompleteFunction();
});
