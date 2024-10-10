tippy('#image', {
    content: "Ceci est une image",
    trigger: 'click',
    animation: 'scale',
    hideOnClick: true,
  });
  
  tippy('#square', {
    content: "Ceci est un carré",
    trigger: 'click',
    animation: 'scale',
    hideOnClick: true,
  });
  
  tippy('#sound', {
    content: "Ceci est un son",
    trigger: 'click',
    animation: 'scale',
    hideOnClick: true,
  });
  
  tippy('#button', {
    content: "Ceci est un bouton",
    trigger: 'click',
    animation: 'scale',
    hideOnClick: true,
  });
  
  tippy('#video', {
    content: "Ceci est une vidéo",
    trigger: 'click',
    animation: 'scale',
    hideOnClick: true,
  });
  
  document.addEventListener('click', function (event) {
    tippy.hideAll({ duration: 200 });
  });
  