"use strict";
const Constants = require ("../../../Constants");
const InsectBase = require("../setTA25/Insect");

class Insect extends InsectBase {
  constructor (game) {
    super(game, "Insect", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Insect;
