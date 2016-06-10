"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Kavu", "Invasion", "INV");
  }
}

module.exports = HuntingKavu;
