module.exports=function analysis(str){
  var str1=str.substring(str.indexOf('[')+2,str.indexOf(']')-1)
  str1=str1.split(' ')
  var arr=[]
  for(var i=0;i<str1.length;i++){
    if(str1[i]!=''){
      arr.push(str1[i])
    }
  }
  arr=arr.map(Number)
  console.log(arr)
  var result=[]
  for(var i=0;i<arr.length;i++){
   if(arr[i]>0){
     result.push(i.toString())
   }
  }
  console.log(result)
  return result
}


// str="tensor([[ 20.5845, -15.3465,  11.7848,   6.4554, -12.0741,  -8.7287,  -8.7034,-25.1609,  12.8013,  13.6011, -16.2055]], device='cuda:0',grad_fn=<MmBackward0>)"
// str="tensor([[-75.3820, -54.6916, -18.0902, -76.2202, -57.6398, -16.2283, -30.1541,
//   -83.6340, -23.4467,  -7.5065, -44.6782]], device='cuda:0',
// grad_fn=<MmBackward0>)"