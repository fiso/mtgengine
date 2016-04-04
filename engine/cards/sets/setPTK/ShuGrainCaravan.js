"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShuGrainCaravan extends Card {
  constructor(game) {
    super(game, "Shu Grain Caravan", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuGrainCaravan;
