// const registerUser = (req, res) => {
//   res.status(200).send({
//     message: `Hello ${req.body.email} your user was registered!`,
//   });
// };

// register user asynch function
const registerUser = async (req, res) => {
  // send message to client
  res.status(200).send({
    message: `Hello ${req.body.email} your user was registered!`,
  });
};

module.exports = {
  registerUser,
};
