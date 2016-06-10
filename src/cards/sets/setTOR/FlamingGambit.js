"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamingGambit extends UnimplementedCard {
  constructor (game) {
    super(game, "Flaming Gambit", "Torment", "TOR");
  }
}

module.exports = FlamingGambit;
