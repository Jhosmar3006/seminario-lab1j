function palindromeRearranging(s){
    var abc = [26];
    for(var i=0;i<26;i++){
      abc[i]=0;
    }
    for(var i=0;i<s.length;++i){
      abc[s.charCodeAt(i)-97]++;
    }
    var cnt=0;
    for(var i=0;i<26;++i){
      if(abc[i]%2)++cnt;
    }
    if(cnt > 1){
      return false;
    }
    return true;
  }
  var s="aabbccdddee";
  console.log((palindromeRearranging(s) ? "true" : "false"));