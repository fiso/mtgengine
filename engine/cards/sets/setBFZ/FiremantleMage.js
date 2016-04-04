"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiremantleMage extends Card {
  constructor(game) {
    super(game, "Firemantle Mage", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FiremantleMage;
