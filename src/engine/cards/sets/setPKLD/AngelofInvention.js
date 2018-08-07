"use strict";
const Constants = require ("../../../Constants");
const AngelofInventionBase = require("../setKLD/AngelofInvention");

class AngelofInvention extends AngelofInventionBase {
  constructor (game) {
    super(game, "Angel of Invention", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AngelofInvention;
