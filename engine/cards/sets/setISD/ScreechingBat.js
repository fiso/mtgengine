"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingBat extends Card {
  constructor(game) {
    super(game, "Screeching Bat", "Innistrad", "ISD");
  }
}

module.exports = ScreechingBat;
