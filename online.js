$(document).ready(function(){  
   $('div.accordion').accordion({heightStyle: "content", header: "h3", collapsible: true, active:false});  
});  

ReactDOM.render(
  ReactModalExample(
    {label: 'Trigger Confirm Dialog',
     className: 'ReactModal__Content--canvas',
     overlayClassName: 'ReactModal__Overlay--canvas' }
  ), document.getElementById('react-modal-example')
);