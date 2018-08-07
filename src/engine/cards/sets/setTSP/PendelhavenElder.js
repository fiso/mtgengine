"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PendelhavenElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Pendelhaven Elder", "Time Spiral", "TSP");
  }
}

module.exports = PendelhavenElder;
