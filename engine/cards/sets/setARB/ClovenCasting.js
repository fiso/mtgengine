"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClovenCasting extends Card {
  constructor(game) {
    super(game, "Cloven Casting", "Alara Reborn", "ARB");
  }
}

module.exports = ClovenCasting;
