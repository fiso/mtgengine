"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanTomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclopean Tomb", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanTomb;
