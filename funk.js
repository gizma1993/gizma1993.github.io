function makeTableFromCountry (countries,about){ 
    tab = '<div>'
    for(let i = 0; i<countries.length; i++){
        tab+= '<div>'
        tab+='<div style="text-align: center; background: #9e9a9a ">' + "<h2>" + countries[i][0] +"-" +countries[i][1] + "</h2>" + "</div>"
        tab +='<table width="80%">';
        for(let k = 2; k < 6; k++){
            tab+="<tr>"
            tab+="<td>" + about[k] + "</td>"
            tab+="<td>" + countries[i][k] + "</td>"
            tab+="</tr>";
        }
        tab+="</table>";
        tab +='<table width="85%">';
        for(let k = 6; k < 7; k++){
            tab+="<tr>"
            tab+="<td>" + about[k] + "</td>"
            tab+="<td>"
            let arr = countries[i][k].map((num, ii)=>{
                return "<div>" + (ii+1) + " " + num +"</div>"
            }) 
            arr = arr.join(" ")
            tab += arr + "</td>"
        }
        tab+="</table>";
        tab +='<table width="100%">';
        for(let k = 7; k < about.length; k++){
            tab+="<tr>"
            if (k < about.length-1 ) {
                tab+="<td>" + about[k] + "</td>"
                tab+="<td>"
                let l = countries[i][k].map((num, ii)=>{
                    let p = num.map((n)=>{
                        return n
                    })
                    p = p.join(" ")
                    return "<div>" +(ii+1)+ " " + p +"</div>"
                }) 
                l = l.join(" ")
                tab += l + "</td>"
            }
            else {
                tab+="</table>";
                tab+='<div style="text-align: center; font-weight: bold">' + about[k] + "</div>"
                tab +='<table width="100%" border="1">';
                tab+="<tr>"
                for (var key in countries[i][k]) {
                    tab+="<td>" + key +":" + countries[i][k][key] + "</td>"
                }
                tab+="</tr>";
                tab+="</table>";
            }
            tab+="</tr>";
        }
        tab+= "</div>"
    }
    tab+= "</div>"
    return tab;
}

document.write(makeTableFromCountry(countries,about))
