"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rancor extends UnimplementedCard {
  constructor(game) {
    super(game, "Rancor", "Archenemy", "ARC");
  }
}

module.exports = Rancor;
