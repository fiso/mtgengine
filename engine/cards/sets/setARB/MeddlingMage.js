"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeddlingMage extends Card {
  constructor(game) {
    super(game, "Meddling Mage", "Alara Reborn", "ARB");
  }
}

module.exports = MeddlingMage;
