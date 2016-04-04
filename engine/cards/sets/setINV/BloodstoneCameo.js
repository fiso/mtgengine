"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodstoneCameo extends Card {
  constructor(game) {
    super(game, "Bloodstone Cameo", "Invasion", "INV");
  }
}

module.exports = BloodstoneCameo;
