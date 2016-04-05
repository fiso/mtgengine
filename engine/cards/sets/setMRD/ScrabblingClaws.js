"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrabblingClaws extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrabbling Claws", "Mirrodin", "MRD");
  }
}

module.exports = ScrabblingClaws;
