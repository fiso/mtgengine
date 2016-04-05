"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiremantleMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Firemantle Mage", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FiremantleMage;
