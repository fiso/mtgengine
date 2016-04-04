"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningTalons extends Card {
  constructor(game) {
    super(game, "Lightning Talons", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LightningTalons;
