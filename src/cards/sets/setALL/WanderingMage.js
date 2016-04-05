"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Wandering Mage", "Alliances", "ALL");
  }
}

module.exports = WanderingMage;
