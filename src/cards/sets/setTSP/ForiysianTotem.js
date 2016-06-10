"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForiysianTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Foriysian Totem", "Time Spiral", "TSP");
  }
}

module.exports = ForiysianTotem;
