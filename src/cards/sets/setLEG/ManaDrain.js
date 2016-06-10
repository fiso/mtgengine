"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaDrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Drain", "Legends", "LEG");
  }
}

module.exports = ManaDrain;
