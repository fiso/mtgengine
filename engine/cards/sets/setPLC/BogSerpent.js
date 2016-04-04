"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Serpent", "Planar Chaos", "PLC");
  }
}

module.exports = BogSerpent;
