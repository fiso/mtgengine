"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrifterilDal extends UnimplementedCard {
  constructor (game) {
    super(game, "Drifter il-Dal", "Time Spiral", "TSP");
  }
}

module.exports = DrifterilDal;
