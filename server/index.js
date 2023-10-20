const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();
const multer = require("multer");
const path = require("path");
const deleteAllFilesInDir = require("./utils/deleteFile");
const { db } = require("./db");
const router = require("./auth/auth.routes");
const dotenv = require("dotenv");
const authMiddleware = require("./auth/auth.middlewares");
app.use(express.json());
const port = process.env.PORT || 8080;

const con = db();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
app
  .route("/user")
  .get(authMiddleware.isAuth, function (req, res) {
    let sql = "SELECT * FROM user";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = `INSERT INTO user SET ?`;
    const { body } = req;
    if (!body.ID) {
      res
        .status(400)
        .send({ status: "error", message: "Dữ liệu đầu vào không tồn tại." });
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: "error", message: err });
        } else {
          res.send({ status: "success", data: body });
        }
      });
    }
  });

app
  .route("/user/:id")
  .get(function (req, res) {
    const { id } = req.params;
    let sql = "SELECT * FROM user WHERE id = ?";
    con.query(sql, id, (err, response) => {
      if (err) throw err;
      const data =
        response && Array.isArray(response)
          ? response.find((el) => el.id == id)
          : null;
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", message: "AccountID không tồn tại." });
      }
    });
  })
  .put(function (req, res) {
    let sql = `UPDATE user SET ? WHERE id = ?`;
    const { body, params } = req;
    const { id } = params;
    if (!body.id) {
      res
        .status(400)
        .send({ status: "error", message: "id vào không tồn tại." });
    } else {
      con.query(sql, [body, id], function (err) {
        if (err) {
          res.send({ status: "error", message: err });
        } else {
          res.send({ status: "success", data: body });
        }
      });
    }
  })
  .delete(function (req, res) {
    const { id } = req.params;
    let sql = `DELETE FROM user WHERE id = ? `;
    con.query(sql, id, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: id });
      }
    });
  });
app.use("/auth", router);

app.get("/profile", authMiddleware.isAuth, async (req, res) => {
  res.send(req.user);
});

app.use("/auth", router);

app.get("/profile", authMiddleware.isAuth, async (req, res) => {
  res.send(req.user);
});


app.get('/product', (req, res) => {
  let sql = 'SELECT * FROM Product';
  con.query(sql, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
})

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  let sql =
    `SELECT * FROM Product where product.id ='${id}'`
  con.query(sql, id, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
})
app.get('/:brand/', (req, res) => {
  const { brand } = req.params;
  console.log(brand)
  let sql =
    // `SELECT * FROM Product,Brand where product.brand_id=brand.id and brand.name = '${brand}'`
    `SELECT product.id, title, price, discount, thumbnail, size, description FROM Product,Brand where product.brand_id=brand.id and brand.name =  '${brand}'`
  con.query(sql, brand, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
})

app.get('/thumb/:id', (req, res) => {
  const { id } = req.params;
  let sql =
    `select galery.thumbnail ,product.id from galery,product where product.id = galery.product_id and product.id =${id}`
  con.query(sql, id, (err, response) => {
    if (err) {
      res.send({ status: "error", message: err });
    } else {
      res.send({ status: "success", data: response });
    }
  });
})

app.listen(port);
console.log("Server started at http://localhost:" + port);
