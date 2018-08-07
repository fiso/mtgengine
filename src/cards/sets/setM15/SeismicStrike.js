"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Strike", "Magic 2015", "M15");
  }
}

module.exports = SeismicStrike;
