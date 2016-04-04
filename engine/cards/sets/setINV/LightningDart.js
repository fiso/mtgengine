"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningDart extends Card {
  constructor(game) {
    super(game, "Lightning Dart", "Invasion", "INV");
  }
}

module.exports = LightningDart;
