"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BribersPurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Briber's Purse", "Ugin's Fate", "UGIN");
  }
}

module.exports = BribersPurse;
