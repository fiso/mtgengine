"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Mage", "Masters Edition III", "ME3");
  }
}

module.exports = WanderingMage;
