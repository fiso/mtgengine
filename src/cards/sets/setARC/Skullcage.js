"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skullcage extends UnimplementedCard {
  constructor (game) {
    super(game, "Skullcage", "Archenemy", "ARC");
  }
}

module.exports = Skullcage;
