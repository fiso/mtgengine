"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mirri extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirri", "Vanguard", "VAN");
  }
}

module.exports = Mirri;
