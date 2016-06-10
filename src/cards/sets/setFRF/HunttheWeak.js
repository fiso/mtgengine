"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HunttheWeak extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunt the Weak", "Fate Reforged", "FRF");
  }
}

module.exports = HunttheWeak;
