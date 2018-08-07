"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkforDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark for Death", "Gatecrash", "GTC");
  }
}

module.exports = MarkforDeath;
