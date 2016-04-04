"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlasterMage extends Card {
  constructor(game) {
    super(game, "Blaster Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlasterMage;
