"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeismicSpike extends Card {
  constructor(game) {
    super(game, "Seismic Spike", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeismicSpike;
