"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionFlag extends UnimplementedCard {
  constructor (game) {
    super(game, "Coalition Flag", "Apocalypse", "APC");
  }
}

module.exports = CoalitionFlag;
