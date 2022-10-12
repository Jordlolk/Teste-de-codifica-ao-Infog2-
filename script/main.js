function generateElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.children;
  }

  function callApi() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        json.map((item) => {
          const listItem = generateElements(`
          <li class="list-item">
            <span>${item.id}</span>
            <p>${item.title}</p>
          </li>
        `)[0];

          document.querySelector('.list').append(listItem);
        });
      });
  }
