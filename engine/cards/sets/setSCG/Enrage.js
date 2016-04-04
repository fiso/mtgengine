"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnrageBase = require("../setDPA/Enrage.js");

class Enrage extends EnrageBase {
  constructor(game) {
    super(game, "Enrage", "Scourge", "SCG");
  }
}

module.exports = Enrage;
