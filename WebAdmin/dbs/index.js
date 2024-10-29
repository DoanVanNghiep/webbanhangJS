const MongoClient = require('mongodb').MongoClient;

// Chuỗi kết nối MongoDB Atlas với các tùy chọn bổ sung
const PROD_URI = "mongodb+srv://doannghiepnd2k3:MF1wmqcXDGSlAwks@cluster0.9qer4.mongodb.net/webbanhang";

// Cấu hình và hàm kết nối như trước
var dbs = { production: {} };

async function connect(url) {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Kết nối cơ sở dữ liệu thành công!");
    return client.db();
  } catch (error) {
    console.error("Không thể kết nối cơ sở dữ liệu:", error);
    throw error;
  }
}

exports.initdb = async function () {
  try {
    let database = await connect(PROD_URI);
    dbs.production = database;
  } catch (error) {
    console.error("Lỗi khi khởi tạo cơ sở dữ liệu:", error);
  }
};

exports.dbs = dbs;
