let st = "Jhoel";
// Me el numero en ASCII
let a = st.charCodeAt(1);
console.log(st);
console.log(a);
let c = "tiene que mostrarse esto"
// Me da un boolean si hay el substring
let answer = c.includes("esto");
console.log(c);
console.log(answer);
// Me devuelve el substring si le doy los indices
answer = c.slice(9,-5);
console.log(answer);
// Convierte a mayusculas y minusculas
let m = "MY NAME IS JHOEL";
let n = m.toLowerCase();
console.log(m);
console.log(n);
// reemplazamos subestrings
let ad = m.replace("JHOEL","olivera");
console.log(ad);