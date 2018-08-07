"use strict";
const Constants = require ("../../../Constants");
const RegenerationBase = require("../set10E/Regeneration");

class Regeneration extends RegenerationBase {
  constructor (game) {
    super(game, "Regeneration", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Regeneration;
