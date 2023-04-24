const Product = require("../models/product.model");

const routes = [
  {
    method: "GET",
    url: "/products",
    handler: async (request, reply) => {
      const products = await Product.find();
      reply.send(products);
    },
  },
  {
    method: "GET",
    url: "/products/get-inventory",
    schema: {
      querystring: {
        sku: { type: "string" } ,
      },
    },
    handler: async (request, reply) => {
      request.query.sku.forEach((sku) => {
        const inventory = Product.find({ SKU: sku });
        reply.send(inventory);
      });
    },
  },
  
  {
    method: "POST",
    url: "/products",
    handler: async (request, reply) => {
      // await Product.insertMany(request.body)
      //   .then((data) => {
      //     reply.send(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     reply.send(err);
      //   });
      reply.send({request: request.body});
    },
  },

  {
    method: "DELETE",
    url: "/products:id",
    handler: async (request, reply) => {
      reply.send({ hello: "Deleting Products" });
    },
  },
  {
    method: "PUT",
    url: "/products:id",
    handler: async (request, reply) => {
      reply.send({ hello: "Updating Products" });
    },
  },
];

module.exports = routes;
