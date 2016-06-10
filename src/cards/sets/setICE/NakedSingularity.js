"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NakedSingularity extends UnimplementedCard {
  constructor (game) {
    super(game, "Naked Singularity", "Ice Age", "ICE");
  }
}

module.exports = NakedSingularity;
