"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Needlebug extends UnimplementedCard {
  constructor(game) {
    super(game, "Needlebug", "Mirrodin", "MRD");
  }
}

module.exports = Needlebug;
