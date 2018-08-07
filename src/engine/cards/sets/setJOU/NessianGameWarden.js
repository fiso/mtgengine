"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NessianGameWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Nessian Game Warden", "Journey into Nyx", "JOU");
  }
}

module.exports = NessianGameWarden;
