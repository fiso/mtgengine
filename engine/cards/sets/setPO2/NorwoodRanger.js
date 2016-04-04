"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NorwoodRangerBase = require("../set8ED/NorwoodRanger.js");

class NorwoodRanger extends NorwoodRangerBase {
  constructor(game) {
    super(game, "Norwood Ranger", "Portal Second Age", "PO2");
  }
}

module.exports = NorwoodRanger;
