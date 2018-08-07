"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleAltisaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Altisaur", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = TempleAltisaur;
