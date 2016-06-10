"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metallurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Metallurgeon", "Archenemy", "ARC");
  }
}

module.exports = Metallurgeon;
