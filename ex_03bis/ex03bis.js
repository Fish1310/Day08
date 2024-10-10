const tooltips = [
    tippy('#image', {
      content: "Ceci est une image",
      trigger: 'click',
      hideOnClick: true,
    }),
    tippy('#square', {
      content: "Ceci est un carré",
      trigger: 'click',
      hideOnClick: true,
    }),
    tippy('#sound', {
      content: "Ceci est un son",
      trigger: 'click',
      hideOnClick: true,
    }),
    tippy('#button', {
      content: "Ceci est un bouton",
      trigger: 'click',
      hideOnClick: true,
    }),
    tippy('#video', {
      content: "Ceci est une vidéo",
      trigger: 'click',
      hideOnClick: true,
    })
  ];
  
  window.addEventListener('load', () => {
    tooltips[0][0].show();
  });
  
  document.addEventListener('click', function (event) {
    tooltips.forEach(tip => {
      tip[0].hide();
    });
  });
  