"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychoticEpisode extends Card {
  constructor(game) {
    super(game, "Psychotic Episode", "Time Spiral", "TSP");
  }
}

module.exports = PsychoticEpisode;
