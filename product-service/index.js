const express = require("express");
const expressJSDocSwagger = require("express-jsdoc-swagger");
const app = express();

const ROUTE_PREFIX = "/v1/product";

const options = {
  info: {
    version: "1.0.0",
    title: "Product | API Doc",
    description: "Product | API Documentation",
  },
  security: {
    BearerAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: __dirname,
  filesPattern: ["./schema.js"],
  swaggerUIPath: `${ROUTE_PREFIX}/api-docs`,
  exposeSwaggerUI: true,
  exposeApiDocs: true,
  apiDocsPath: `${ROUTE_PREFIX}/api-docs`,
  notRequiredAsNullable: false,
  swaggerUiOptions: {
    customSiteTitle: "Product | API Doc",
  },
};

expressJSDocSwagger(app)(options);

app.get(`${ROUTE_PREFIX}/status`, (req, res) =>
  res.status(200).json({ message: "Product app works" })
);

app.listen(5002, () => console.log("Product service started on port 5002"));
