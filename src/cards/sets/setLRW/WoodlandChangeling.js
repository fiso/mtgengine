"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandChangeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodland Changeling", "Lorwyn", "LRW");
  }
}

module.exports = WoodlandChangeling;
