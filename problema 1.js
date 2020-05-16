function mxElement(v){
    var n=v.length,ans=0;
    var nv = [];
    for(var x=0;x<n;++x){
      ans=Math.max(v[x].length,ans);
    }
    for(var x=0;x<n;++x){
      if(v[x].length == ans)nv.push(v[x]);
    }
    return nv;
  }
  var v = ["enyky", "benyky", "yely", "varennyky", "aba"];
  var nv = mxElement(v);
  console.log(nv);
