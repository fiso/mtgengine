"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrowthSpurt extends UnimplementedCard {
  constructor(game) {
    super(game, "Growth Spurt", "Unglued", "UGL");
  }
}

module.exports = GrowthSpurt;
