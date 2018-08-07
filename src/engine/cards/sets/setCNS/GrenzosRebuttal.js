"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrenzosRebuttal extends UnimplementedCard {
  constructor (game) {
    super(game, "Grenzo's Rebuttal", "Conspiracy", "CNS");
  }
}

module.exports = GrenzosRebuttal;
