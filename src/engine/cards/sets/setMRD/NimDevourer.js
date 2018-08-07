"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimDevourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Devourer", "Mirrodin", "MRD");
  }
}

module.exports = NimDevourer;
