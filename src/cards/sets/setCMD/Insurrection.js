"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insurrection extends UnimplementedCard {
  constructor(game) {
    super(game, "Insurrection", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Insurrection;
