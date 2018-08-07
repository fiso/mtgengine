"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HapatraVizierofPoisons extends UnimplementedCard {
  constructor (game) {
    super(game, "Hapatra, Vizier of Poisons", "Amonkhet", "AKH");
  }
}

module.exports = HapatraVizierofPoisons;
