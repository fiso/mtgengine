"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheReliquary extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Reliquary", "Iconic Masters", "IMA");
  }
}

module.exports = KnightoftheReliquary;
