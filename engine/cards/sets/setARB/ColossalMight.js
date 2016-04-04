"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ColossalMight extends Card {
  constructor(game) {
    super(game, "Colossal Might", "Alara Reborn", "ARB");
  }
}

module.exports = ColossalMight;
