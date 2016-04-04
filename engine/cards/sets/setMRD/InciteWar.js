"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InciteWar extends Card {
  constructor(game) {
    super(game, "Incite War", "Mirrodin", "MRD");
  }
}

module.exports = InciteWar;
