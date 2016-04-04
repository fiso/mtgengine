"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GemstoneCaverns extends UnimplementedCard {
  constructor(game) {
    super(game, "Gemstone Caverns", "Time Spiral", "TSP");
  }
}

module.exports = GemstoneCaverns;
