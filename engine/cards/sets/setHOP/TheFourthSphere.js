"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheFourthSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "The Fourth Sphere", "Planechase", "HOP");
  }
}

module.exports = TheFourthSphere;
