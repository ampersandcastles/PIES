module.exports = (req, res, next) => {
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.header(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );

  next();
};

//! CORS

/*
//* Cross Origin Resource Sharing
  - Mechanism that uses additional http headers to tell browsers to give a web application running at one origin access to selected resources from a different origin

  1: a response header that tells the browser to allow code from any origin
  2: a response header that specifies the method or methods allowed when accessing the resources to a preflight request
  3: a response header that's used in response to preflight request that indicates which http headers can be used during the actual request.

*/
