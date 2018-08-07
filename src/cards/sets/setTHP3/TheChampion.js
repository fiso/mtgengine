"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "The Champion", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = TheChampion;
