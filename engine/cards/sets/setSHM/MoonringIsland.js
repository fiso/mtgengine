"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonringIsland extends Card {
  constructor(game) {
    super(game, "Moonring Island", "Shadowmoor", "SHM");
  }
}

module.exports = MoonringIsland;
