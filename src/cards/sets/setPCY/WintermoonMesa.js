"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WintermoonMesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Wintermoon Mesa", "Prophecy", "PCY");
  }
}

module.exports = WintermoonMesa;
