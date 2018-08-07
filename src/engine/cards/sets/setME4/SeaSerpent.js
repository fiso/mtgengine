"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Serpent", "Masters Edition IV", "ME4");
  }
}

module.exports = SeaSerpent;
