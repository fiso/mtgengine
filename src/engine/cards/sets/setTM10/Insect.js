"use strict";
const Constants = require ("../../../Constants");
const InsectBase = require("../setTA25/Insect");

class Insect extends InsectBase {
  constructor (game) {
    super(game, "Insect", "Magic 2010 Tokens", "TM10");
  }
}

module.exports = Insect;
