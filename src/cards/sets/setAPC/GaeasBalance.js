"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasBalance extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Balance", "Apocalypse", "APC");
  }
}

module.exports = GaeasBalance;
