"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodTribute extends Card {
  constructor(game) {
    super(game, "Blood Tribute", "Zendikar", "ZEN");
  }
}

module.exports = BloodTribute;
