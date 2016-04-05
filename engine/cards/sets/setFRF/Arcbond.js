"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arcbond extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcbond", "Fate Reforged", "FRF");
  }
}

module.exports = Arcbond;
