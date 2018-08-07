"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FenHauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Fen Hauler", "Aether Revolt", "AER");
  }
}

module.exports = FenHauler;
