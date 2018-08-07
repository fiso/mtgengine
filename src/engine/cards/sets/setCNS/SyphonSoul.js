"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Syphon Soul", "Conspiracy", "CNS");
  }
}

module.exports = SyphonSoul;
