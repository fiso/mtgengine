"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedTriumph extends UnimplementedCard {
  constructor(game) {
    super(game, "Shared Triumph", "Onslaught", "ONS");
  }
}

module.exports = SharedTriumph;
