"use strict";
const Constants = require ("../../../Constants");
const InsectBase = require("../setTA25/Insect");

class Insect extends InsectBase {
  constructor (game) {
    super(game, "Insect", "Scars of Mirrodin Tokens", "TSOM");
  }
}

module.exports = Insect;
