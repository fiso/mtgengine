"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaJet extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Jet", "Modern Masters 2017", "MM3");
  }
}

module.exports = MagmaJet;
