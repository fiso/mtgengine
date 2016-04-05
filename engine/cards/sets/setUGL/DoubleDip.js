"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleDip extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Dip", "Unglued", "UGL");
  }
}

module.exports = DoubleDip;
