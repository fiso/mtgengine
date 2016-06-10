"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoic Champion", "Legions", "LGN");
  }
}

module.exports = StoicChampion;
