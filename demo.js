var arr = new Array();
arr[0] = 11;
arr[1] = "HI";
arr[2] = true;
arr[3] = 234.87;
arr[4] = new Date();
for (var i in arr) {
    console.log(arr[i]);
}
console.log("i value :" + i);
var x = 5;
x = 25; //valid can be modified unlike const
var str = "<html>\n\t\t<head>\n\t\t\t<title>hiii</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<h1>sommmeeeeee</h1>\n\t\t</body>\n\t\t</html>";
console.log(str);
var y = 30;
var str2 = "<div>THE SUM IS " + (x + y) + "</div>";
console.log(str2);
