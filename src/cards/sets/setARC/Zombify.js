"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombify extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombify", "Archenemy", "ARC");
  }
}

module.exports = Zombify;
