"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GargoyleSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargoyle Sentinel", "Magic 2011", "M11");
  }
}

module.exports = GargoyleSentinel;
