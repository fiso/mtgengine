"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Elemental", "Alliances", "ALL");
  }
}

module.exports = StormElemental;
