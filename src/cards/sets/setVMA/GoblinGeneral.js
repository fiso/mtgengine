"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin General", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinGeneral;
