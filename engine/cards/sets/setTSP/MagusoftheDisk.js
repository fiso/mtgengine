"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheDisk extends UnimplementedCard {
  constructor(game) {
    super(game, "Magus of the Disk", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheDisk;
