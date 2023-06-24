document.addEventListener('DOMContentLoaded', function() {
  var sidebarLinks = document.querySelectorAll('.sidebar a');
  var contentContainer = document.querySelector('.content');

  var sectionContents = {
    home: {
      title: 'Home',
      content: 'This is the home content.',
    },
    contact: {
      title: 'Contact',
      content: 'This is the contact content.',
    },
    information: {
      title: 'Information',
      content: 'This is the information content.',
    },
    guide: {
      title: 'Guide',
      content: 'This is the guide content.',
    }
  };

  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = link.getAttribute('href').substring(1);

      // Remove any previously displayed content
      contentContainer.innerHTML = '';

      // Create the content elements
      var titleElement = document.createElement('h1');
      titleElement.textContent = sectionContents[targetId].title;

      var contentElement = document.createElement('p');
      contentElement.textContent = sectionContents[targetId].content;

      // Append the content elements to the content container
      contentContainer.appendChild(titleElement);
      contentContainer.appendChild(contentElement);
    });
  });
});
