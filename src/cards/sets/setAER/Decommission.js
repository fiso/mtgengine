"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Decommission extends UnimplementedCard {
  constructor (game) {
    super(game, "Decommission", "Aether Revolt", "AER");
  }
}

module.exports = Decommission;
