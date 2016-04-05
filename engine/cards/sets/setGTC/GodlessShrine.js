"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodlessShrine extends UnimplementedCard {
  constructor(game) {
    super(game, "Godless Shrine", "Gatecrash", "GTC");
  }
}

module.exports = GodlessShrine;
