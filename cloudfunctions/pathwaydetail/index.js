// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'trbylw-6gflq0ca2b4c721f'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db=cloud.database();
  console.log(event)
  return await db.collection('pathway').where({
    pathway_id:event.pathwayindex
  }).get({
    sucdess:function(res){
      return res
    }
  })
}