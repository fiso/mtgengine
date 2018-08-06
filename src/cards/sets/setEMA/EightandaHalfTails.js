"use strict";
const Constants = require ("../../../Constants");
const EightandaHalfTailsBase = require("../setCHK/EightandaHalfTails");

class EightandaHalfTails extends EightandaHalfTailsBase {
  constructor (game) {
    super(game, "Eight-and-a-Half-Tails", "Eternal Masters", "EMA");
  }
}

module.exports = EightandaHalfTails;
