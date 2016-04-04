"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlinkingGiant extends Card {
  constructor(game) {
    super(game, "Slinking Giant", "Shadowmoor", "SHM");
  }
}

module.exports = SlinkingGiant;
