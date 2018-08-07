"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutofBounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Out of Bounds", "Battlebond", "BBD");
  }
}

module.exports = OutofBounds;
