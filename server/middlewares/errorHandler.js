const errorHandler = (err,req,res,next) =>{
  let code = 500;
  let message = err;

  if (
  err.name === `SequelizeValidationError` ||
  err.name === `SequelizeUniqueConstraintError` 
  ) {
  code = 400;
  message = err.errors.map(el => el.message);
  } else if (
  err.name === `invalid` 
  ){
  code = 401;
  message = `Invalid`;
  } else if (
  err.name === `Paricipant not found`
  ) {
  code = 404;
  message = `Error not found`;
  } else if (
  err.name === "Forbidden"
  ) {
  code = 403; 
  message = "You do not have access";
  } else if (
  err.name === "BadRequest"
  ) {
  code = 400; 
  message = "Params id must an integer";
  } else if (
  err.name === "NotFound" || 
  err.name === "Participant Found The Book"
  ) {
  code = 404;
  message = "Not Found";
  } else if (
  err.name === "InvalidToken" || 
  err.name === "JsonWebTokenError"
  ) {
  code = 401;
  message = "Access Token is Invalid";
  } else if (
  err.name === `Email has been registered`
  ) {
  code = 401;
  message = `Email has been registered`;      
  } 
      res.status(code).json({
      statusCode: code,
      error: {
      message: message
  }
  });
}

module.exports = errorHandler