"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicShift extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Shift", "Dominaria", "DOM");
  }
}

module.exports = SeismicShift;
