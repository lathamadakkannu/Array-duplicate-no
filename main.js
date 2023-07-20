var a=[45,36,98,43,33,45,78,12,36];
document.write("a=[45,36,98,43,33,45,78,12,36]"+"<br>"+"<br>");
var b=[];
a.sort();
let temporary;
for (let i=0;i<a.length;i++){
	if(a[i]!==temporary){
		b.push(a[i]);
		temporary=a[i];
	}
}
document.write(b);