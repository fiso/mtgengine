"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicRupture extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Rupture", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = SeismicRupture;
