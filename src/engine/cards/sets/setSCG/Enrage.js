"use strict";
const Constants = require ("../../../Constants");
const EnrageBase = require("../setDPA/Enrage");

class Enrage extends EnrageBase {
  constructor (game) {
    super(game, "Enrage", "Scourge", "SCG");
  }
}

module.exports = Enrage;
