function reverse(s,x,y){
  ns=" ";
  for(var i=0;i<x;i++)ns+=s[i];
  for(var i=y-1;i>=x+1;i--)ns+=s[i];
  for(var i=y+1;i<s.length;i++)ns+=s[i];
  return ns;
}
function reverseInParentheses(s){
  var x,y;
  x=y=-1;
  for(var i=0;i<s.length;i++){
    if(s[i]=='('){
        x=i;
    }
    if(s[i]==')'){
        y=i;
        if(x>=0 && y>=0)break;
    }
  }
  if(x<y && x>=0 && y>=0){
    ns=reverse(s,x,y);
    console.log(ns);
    return reverseInParentheses(ns);
  }
  else{
    return s;
  }
}
var s="foo(bar(baz))blim";
console.log(reverseInParentheses(s));