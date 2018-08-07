"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Cathar", "Masters 25", "A25");
  }
}

module.exports = DauntlessCathar;
