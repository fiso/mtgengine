"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "War Elemental", "Mirrodin", "MRD");
  }
}

module.exports = WarElemental;
