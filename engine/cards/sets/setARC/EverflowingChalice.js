"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EverflowingChalice extends UnimplementedCard {
  constructor(game) {
    super(game, "Everflowing Chalice", "Archenemy", "ARC");
  }
}

module.exports = EverflowingChalice;
