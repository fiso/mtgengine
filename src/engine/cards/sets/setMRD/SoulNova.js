"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulNova extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Nova", "Mirrodin", "MRD");
  }
}

module.exports = SoulNova;
