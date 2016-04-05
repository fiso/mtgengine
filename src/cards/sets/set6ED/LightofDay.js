"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightofDay extends UnimplementedCard {
  constructor(game) {
    super(game, "Light of Day", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightofDay;
