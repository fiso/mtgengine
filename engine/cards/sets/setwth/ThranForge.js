"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranForge extends Card {
  constructor(game) {
    super(game, "Thran Forge", "Weatherlight", "WTH");
  }
}

module.exports = ThranForge;
