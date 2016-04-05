"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicRupture extends UnimplementedCard {
  constructor(game) {
    super(game, "Seismic Rupture", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SeismicRupture;
