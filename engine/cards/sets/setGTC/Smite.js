"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smite extends UnimplementedCard {
  constructor(game) {
    super(game, "Smite", "Gatecrash", "GTC");
  }
}

module.exports = Smite;
