"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldthePerimeter extends UnimplementedCard {
  constructor (game) {
    super(game, "Hold the Perimeter", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HoldthePerimeter;
