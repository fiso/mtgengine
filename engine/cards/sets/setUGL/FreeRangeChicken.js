"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreeRangeChicken extends UnimplementedCard {
  constructor(game) {
    super(game, "Free-Range Chicken", "Unglued", "UGL");
  }
}

module.exports = FreeRangeChicken;
