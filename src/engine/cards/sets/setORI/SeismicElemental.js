"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Elemental", "Magic Origins", "ORI");
  }
}

module.exports = SeismicElemental;
