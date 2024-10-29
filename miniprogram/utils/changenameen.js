module.exports=function changenameen(pathwayindex){
  switch(pathwayindex){
    case '碳水化合物代谢':
      return "0";
     case '能量代谢':
       return '1';
     case '类脂化合物代谢作用':
       return '2';
     case '核苷酸代谢':
       return '3';
     case '氨基酸代谢':
       return '4';
     case '其他氨基酸的代谢':
       return '5'
     case '糖聚糖的生物合成和代谢':
       return '6'
     case "辅助因子和维生素的代谢":
       return '7'
     case '萜类和聚酮类物质的代谢':
       return '8';
     case "其他次生代谢物的生物合成":
       return '9';
     case "异种生物体的生物降解和代谢":
       return "10"
  }
}