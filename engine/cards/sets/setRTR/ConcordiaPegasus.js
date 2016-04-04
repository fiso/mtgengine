"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConcordiaPegasus extends UnimplementedCard {
  constructor(game) {
    super(game, "Concordia Pegasus", "Return to Ravnica", "RTR");
  }
}

module.exports = ConcordiaPegasus;
