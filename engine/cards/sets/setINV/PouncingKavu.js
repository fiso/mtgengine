"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PouncingKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Pouncing Kavu", "Invasion", "INV");
  }
}

module.exports = PouncingKavu;
