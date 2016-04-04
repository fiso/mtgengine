"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingTsunami extends Card {
  constructor(game) {
    super(game, "Living Tsunami", "Zendikar", "ZEN");
  }
}

module.exports = LivingTsunami;
