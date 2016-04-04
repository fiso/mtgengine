"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleTake extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Take", "Unglued", "UGL");
  }
}

module.exports = DoubleTake;
