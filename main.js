var data = SLC.concat(SLCT, SMPC)

function add_row(dat, index){
	var onc = "update_viewer(" + index + "); $('html, body').animate({ scrollTop: 0 }, 'fast');"
	
	var adding = "				<tr onClick=\"" + onc + "\">\n"
	
	for(var i in dat)
	{
		adding += "					<td>"
		adding += dat[i]
		adding += "</td>\n"
	
	}

	adding += "				</tr>\n"
	
	$("#target").append(adding)
	
}

function update_table(){
	var t = $("#target").empty()
	
	for(n in data){
		var dat = []
		
		dat.push( br( data[n]["Síndrome"]       ))
		dat.push( br( data[n]["Epidemiología"]  ))
		dat.push( br( data[n]["Inmunofenotipo"] ))
		dat.push( br( data[n]["Clínica"]        ))
		dat.push( br( data[n]["PComp"]          ))
		dat.push( br( data[n]["Tratamiento"]    ))
		
		add_row(dat, n)
	}
	
}

function update_viewer(index) {
	var dat = data[index]
	
	$("#viewer").empty()
	$("#epi").empty()
	$("#inm").empty()
	$("#gen").empty()
	$("#clin").empty()
	$("#pcomp").empty()
	$("#est").empty()
	$("#tto").empty()
	$("#evo").empty()

	
	$("#viewer").append(  process( dat["Síndrome"]       ))
	$("#epi").append(     process( dat["Epidemiología"]  ))
	$("#inm").append(     process( dat["Inmunofenotipo"] ))
	$("#gen").append(     process( dat["Cariotipo"]      ))
	$("#clin").append(    process( dat["Clínica"]        ))
	$("#pcomp").append(   process( dat["PComp"]          ))
	$("#est").append(     process( dat["Estadiaje"]      ))
	$("#tto").append(     process( dat["Tratamiento"]    ))
	$("#evo").append(     process( dat["Evolución"]      ))
	
	
	console.log(process(dat["PComp"]))
	
}

function br(str) {
	
	t = process(str)
	
	if(t.length > 100) {
		var pre = t.substr(0, 100) + "..."
	} else {
		var pre = t
	}
	return pre
}

function process(str){
	if (str == "" || str === undefined) 
	{
		return "" 
	} else {
		var t = str
		if (str.charAt(0) == ">") {
			t = "►" + str.substr(1, str.length - 1)
		}
		t = t.replace(/\n>/g, "\n►")
		t = t.replace(/=>/g, "→")
		t = t.replace(/</g, "&lt;")
		t = t.replace(/>/g, "&gt;")
		t = t.replace(/\n/g, "<br>")
		t = t.replace(/\n\n/g, "<p />")
		
	
		return t
	}
}


function main() {
	

	var vis = new Array(data.length)
	for (i in vis) {
		vis[i] = true
	}

	update_table()

}
