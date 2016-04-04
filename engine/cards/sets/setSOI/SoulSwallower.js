"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulSwallower extends Card {
  constructor(game) {
    super(game, "Soul Swallower", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SoulSwallower;
