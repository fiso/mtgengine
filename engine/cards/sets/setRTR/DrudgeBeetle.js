"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeBeetle extends UnimplementedCard {
  constructor(game) {
    super(game, "Drudge Beetle", "Return to Ravnica", "RTR");
  }
}

module.exports = DrudgeBeetle;
