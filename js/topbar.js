var wrap = document.getElementById("logo1");


wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("logo");
    
  } else {
    wrap.removeClass("logo");

  }
  
});

var m = document.getElementById("menu1");

m.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    m.addClass("menu");
    m.removeClass("menu1");
  } else {
  	m.addClass("menu1");
    m.removeClass("menu");

  }
  
});