"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandblast", "Fate Reforged", "FRF");
  }
}

module.exports = Sandblast;
