"use strict";
const Constants = require ("../../../Constants");
const FulminatorMageBase = require("../setMM2/FulminatorMage");

class FulminatorMage extends FulminatorMageBase {
  constructor (game) {
    super(game, "Fulminator Mage", "Shadowmoor", "SHM");
  }
}

module.exports = FulminatorMage;
