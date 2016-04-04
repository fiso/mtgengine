"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelForge extends Card {
  constructor(game) {
    super(game, "Darksteel Forge", "Darksteel", "DST");
  }
}

module.exports = DarksteelForge;
