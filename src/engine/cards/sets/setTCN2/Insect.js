"use strict";
const Constants = require ("../../../Constants");
const InsectBase = require("../setTA25/Insect");

class Insect extends InsectBase {
  constructor (game) {
    super(game, "Insect", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Insect;
