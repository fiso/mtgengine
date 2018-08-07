"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchofOrazca extends UnimplementedCard {
  constructor (game) {
    super(game, "Arch of Orazca", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = ArchofOrazca;
