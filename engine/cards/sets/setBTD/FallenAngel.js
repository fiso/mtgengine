"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallenAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Fallen Angel", "Beatdown Box Set", "BTD");
  }
}

module.exports = FallenAngel;
