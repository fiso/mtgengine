"use strict";
const Constants = require ("../../../Constants");
const LifetapBase = require("../set5ED/Lifetap");

class Lifetap extends LifetapBase {
  constructor (game) {
    super(game, "Lifetap", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Lifetap;
