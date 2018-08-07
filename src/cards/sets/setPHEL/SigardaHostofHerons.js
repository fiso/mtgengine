"use strict";
const Constants = require ("../../../Constants");
const SigardaHostofHeronsBase = require("../setAVR/SigardaHostofHerons");

class SigardaHostofHerons extends SigardaHostofHeronsBase {
  constructor (game) {
    super(game, "Sigarda, Host of Herons", "Open the Helvault", "PHEL");
  }
}

module.exports = SigardaHostofHerons;
