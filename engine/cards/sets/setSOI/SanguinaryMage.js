"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanguinaryMage extends Card {
  constructor(game) {
    super(game, "Sanguinary Mage", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SanguinaryMage;
