"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrifterilDal extends Card {
  constructor(game) {
    super(game, "Drifter il-Dal", "Time Spiral", "TSP");
  }
}

module.exports = DrifterilDal;
