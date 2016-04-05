"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleDeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Deal", "Unglued", "UGL");
  }
}

module.exports = DoubleDeal;
