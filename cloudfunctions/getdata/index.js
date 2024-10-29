// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env:'trbylw-6gflq0ca2b4c721f'})
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 return await db.collection("hello").limit(event.limit).get();

}