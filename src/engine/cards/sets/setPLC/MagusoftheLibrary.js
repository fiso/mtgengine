"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheLibrary extends UnimplementedCard {
  constructor (game) {
    super(game, "Magus of the Library", "Planar Chaos", "PLC");
  }
}

module.exports = MagusoftheLibrary;
