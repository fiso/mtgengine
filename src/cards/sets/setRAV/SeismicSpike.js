"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicSpike extends UnimplementedCard {
  constructor(game) {
    super(game, "Seismic Spike", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeismicSpike;
