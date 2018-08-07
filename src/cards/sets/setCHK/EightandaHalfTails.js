"use strict";
const Constants = require ("../../../Constants");
const EightandaHalfTailsBase = require("../setEMA/EightandaHalfTails");

class EightandaHalfTails extends EightandaHalfTailsBase {
  constructor (game) {
    super(game, "Eight-and-a-Half-Tails", "Champions of Kamigawa", "CHK");
  }
}

module.exports = EightandaHalfTails;
