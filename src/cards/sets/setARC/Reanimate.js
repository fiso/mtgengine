"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reanimate extends UnimplementedCard {
  constructor(game) {
    super(game, "Reanimate", "Archenemy", "ARC");
  }
}

module.exports = Reanimate;
