"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NorwoodRangerBase = require("../set8ED/NorwoodRanger.js");

class NorwoodRanger extends NorwoodRangerBase {
  constructor(game) {
    super(game, "Norwood Ranger", "Starter 1999", "S99");
  }
}

module.exports = NorwoodRanger;
