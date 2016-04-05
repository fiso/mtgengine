"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duplicant extends UnimplementedCard {
  constructor(game) {
    super(game, "Duplicant", "Archenemy", "ARC");
  }
}

module.exports = Duplicant;
