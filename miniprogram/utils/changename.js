module.exports=function changename(pathwayindex){
   switch(pathwayindex){
     case "0":
       return '碳水化合物代谢';
      case '1':
        return '能量代谢';
      case '2':
        return '类脂化合物代谢作用';
      case '3':
        return '核苷酸代谢';
      case '4':
        return '氨基酸代谢';
      case '5':
        return '其他氨基酸的代谢'
      case '6':
        return '糖聚糖的生物合成和代谢'
      case '7':
        return "辅助因子和维生素的代谢"
      case '8':
        return '萜类和聚酮类物质的代谢';
      case '9':
        return "其他次生代谢物的生物合成";
      case "10":
        return "异种生物体的生物降解和代谢"
   }
}