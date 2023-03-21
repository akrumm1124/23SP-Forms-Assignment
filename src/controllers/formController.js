exports.form_post = function(req, res) {
  let bird = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status
  }

  console.log(bird);

  res.render('bird-submit', bird);
};