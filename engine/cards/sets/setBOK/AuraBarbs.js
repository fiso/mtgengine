"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraBarbs extends Card {
  constructor(game) {
    super(game, "Aura Barbs", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AuraBarbs;
