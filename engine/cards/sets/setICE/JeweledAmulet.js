"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeweledAmulet extends Card {
  constructor(game) {
    super(game, "Jeweled Amulet", "Ice Age", "ICE");
  }
}

module.exports = JeweledAmulet;
