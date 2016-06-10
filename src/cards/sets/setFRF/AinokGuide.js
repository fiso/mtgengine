"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AinokGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Ainok Guide", "Fate Reforged", "FRF");
  }
}

module.exports = AinokGuide;
