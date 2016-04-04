"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FulminatorMageBase = require("../setMM2/FulminatorMage.js");

class FulminatorMage extends FulminatorMageBase {
  constructor(game) {
    super(game, "Fulminator Mage", "Shadowmoor", "SHM");
  }
}

module.exports = FulminatorMage;
