"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squee extends UnimplementedCard {
  constructor(game) {
    super(game, "Squee", "Vanguard", "VAN");
  }
}

module.exports = Squee;
