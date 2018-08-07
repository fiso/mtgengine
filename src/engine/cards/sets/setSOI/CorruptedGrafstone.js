"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedGrafstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Grafstone", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CorruptedGrafstone;
