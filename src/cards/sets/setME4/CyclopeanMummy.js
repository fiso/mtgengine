"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclopean Mummy", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanMummy;
