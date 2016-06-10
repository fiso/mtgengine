"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Watchwolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchwolf", "Archenemy", "ARC");
  }
}

module.exports = Watchwolf;
