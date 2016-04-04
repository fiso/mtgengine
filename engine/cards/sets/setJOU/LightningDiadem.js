"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningDiadem extends Card {
  constructor(game) {
    super(game, "Lightning Diadem", "Journey into Nyx", "JOU");
  }
}

module.exports = LightningDiadem;
