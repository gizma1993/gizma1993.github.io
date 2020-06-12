let obj1 = {
    countries_obj: countries.slice(0),
    outContries: function(about) { 
        this.lol;
        tab = '<div>'
        for(let i = 0; i < this.countries_obj.length; i++){
            tab+= '<div>'
            tab+='<div style="text-align: center; background: #9e9a9a ">'+ "<div>" +  this.countries_obj[i][0] + "</div>"  +this.countries_obj[i][1]  + "</div>"
            tab +='<table width="75%">';
            for(let k = 2; k < 6; k++){
                tab+="<tr>"
                tab+="<td>" + about[k] + "</td>"
                tab+="<td>" + this.countries_obj[i][k] + "</td>"
                tab+="</tr>";
            }
            tab+="</table>";
            tab +='<table width="83%">';
            for(let k = 6; k < 7; k++){
                tab+="<tr>"
                tab+="<td>" + about[k] + "</td>"
                tab+="<td>"
                let arr = this.countries_obj[i][k].map((num, ii)=>{
                    return "<div>" + (ii+1) + " " + num +"</div>"
                }) 
                arr = arr.join(" ")
                tab += arr + "</td>"
            }
            tab+="</table>";
            tab +='<table width="105%">';
            for(let k = 7; k < about.length; k++){
                tab+="<tr>"            
                if (k < about.length-1 ) {
                    tab+="<td>" + about[k] + "</td>"
                    tab+="<td>"
                    let l = this.countries_obj[i][k].map((num, ii)=>{
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
                    for (var key in this.countries_obj[i][k]) {
                        tab+="<td>" + key +":" + this.countries_obj[i][k][key] + "</td>"
                    }
                    tab+="</tr>";
                    tab+="</table>";
                }
                tab+="</tr>";
            }
            tab+= "</div>"
        }
        tab+= "</div>"
        document.getElementById('tabl').innerHTML = tab;
    }
};

function Change(){
    this.countries_obj = [];
    for (i=0; i<countries.length; i++) {
        if (Array.isArray(countries[i])){
            for (j=0; j<countries[i].length; j++) { 
                if (Array.isArray(countries[i][j])){
                    for (t=0; t<countries[i][j].length; t++) { 
                        if (Array.isArray(countries[i][j][t])){
                            if ( t == 0 ) this.countries_obj[i][j] = [];
                            this.countries_obj[i][j][t] = [];
                            this.countries_obj[i][j][t] = countries[i][j][t].slice()
                        }
                        else{ 
                            if (t == 0 )this.countries_obj[i][j] = [];
                            this.countries_obj[i][j][t] = countries[i][j][t]
                        }
                    }
                }
                else { 
                    if (j ==0 )this.countries_obj[i] = [];
                    this.countries_obj[i][j] = countries[i][j]; 
                }
            }
        }
    };
    this.changeCountries = function(data) {
        this.countries_obj.forEach((country) => {
            country[0] = country[0].toLowerCase()
            let bool = false;
            bool = country[7].every((poem) =>{
                return poem[1].length>=data
            })
            if (bool==true){
                country[0] = country[0].toUpperCase();
            }
        });
    }
};
var obj2 = new Change();

obj1.outContries(about);
