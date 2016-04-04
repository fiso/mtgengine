"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstoppableAsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Unstoppable Ash", "Morningtide", "MOR");
  }
}

module.exports = UnstoppableAsh;
