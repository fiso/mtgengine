"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Infest extends UnimplementedCard {
  constructor(game) {
    super(game, "Infest", "Archenemy", "ARC");
  }
}

module.exports = Infest;
