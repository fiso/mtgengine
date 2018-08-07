"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wanderlust extends UnimplementedCard {
  constructor (game) {
    super(game, "Wanderlust", "Masters Edition", "MED");
  }
}

module.exports = Wanderlust;
