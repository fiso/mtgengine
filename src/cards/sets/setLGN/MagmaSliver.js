"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Magma Sliver", "Legions", "LGN");
  }
}

module.exports = MagmaSliver;
