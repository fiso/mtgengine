"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EliteVanguardBase = require("../setDDF/EliteVanguard.js");

class EliteVanguard extends EliteVanguardBase {
  constructor(game) {
    super(game, "Elite Vanguard", "Magic 2010", "M10");
  }
}

module.exports = EliteVanguard;
