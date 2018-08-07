"use strict";
const Constants = require ("../../../Constants");
const LunarchMantleBase = require("../setA25/LunarchMantle");

class LunarchMantle extends LunarchMantleBase {
  constructor (game) {
    super(game, "Lunarch Mantle", "Eldritch Moon", "EMN");
  }
}

module.exports = LunarchMantle;
