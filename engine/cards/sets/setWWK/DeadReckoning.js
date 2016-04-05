"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadReckoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead Reckoning", "Worldwake", "WWK");
  }
}

module.exports = DeadReckoning;
