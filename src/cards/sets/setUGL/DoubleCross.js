"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleCross extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Cross", "Unglued", "UGL");
  }
}

module.exports = DoubleCross;
