"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofRhonas extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Rhonas", "Amonkhet", "AKH");
  }
}

module.exports = ChampionofRhonas;
