"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoomCannon extends Card {
  constructor(game) {
    super(game, "Doom Cannon", "Onslaught", "ONS");
  }
}

module.exports = DoomCannon;
