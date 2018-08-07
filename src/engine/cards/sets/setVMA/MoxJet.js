"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxJet extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Jet", "Vintage Masters", "VMA");
  }
}

module.exports = MoxJet;
