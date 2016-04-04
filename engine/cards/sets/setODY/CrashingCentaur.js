"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrashingCentaur extends Card {
  constructor(game) {
    super(game, "Crashing Centaur", "Odyssey", "ODY");
  }
}

module.exports = CrashingCentaur;
