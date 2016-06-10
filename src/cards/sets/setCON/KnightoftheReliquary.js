"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheReliquary extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Reliquary", "Conflux", "CON");
  }
}

module.exports = KnightoftheReliquary;
