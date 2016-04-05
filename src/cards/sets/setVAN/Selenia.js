"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Selenia extends UnimplementedCard {
  constructor(game) {
    super(game, "Selenia", "Vanguard", "VAN");
  }
}

module.exports = Selenia;
