"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeechingBite extends Card {
  constructor(game) {
    super(game, "Leeching Bite", "New Phyrexia", "NPH");
  }
}

module.exports = LeechingBite;
