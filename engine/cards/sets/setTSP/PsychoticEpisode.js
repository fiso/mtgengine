"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychoticEpisode extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychotic Episode", "Time Spiral", "TSP");
  }
}

module.exports = PsychoticEpisode;
