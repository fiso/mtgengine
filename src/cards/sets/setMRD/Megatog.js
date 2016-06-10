"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Megatog extends UnimplementedCard {
  constructor (game) {
    super(game, "Megatog", "Mirrodin", "MRD");
  }
}

module.exports = Megatog;
