"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageThallid extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Thallid", "Time Spiral", "TSP");
  }
}

module.exports = SavageThallid;
