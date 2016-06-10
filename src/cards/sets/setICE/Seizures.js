"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seizures extends UnimplementedCard {
  constructor (game) {
    super(game, "Seizures", "Ice Age", "ICE");
  }
}

module.exports = Seizures;
