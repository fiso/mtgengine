"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadisePlume extends UnimplementedCard {
  constructor (game) {
    super(game, "Paradise Plume", "Time Spiral", "TSP");
  }
}

module.exports = ParadisePlume;
