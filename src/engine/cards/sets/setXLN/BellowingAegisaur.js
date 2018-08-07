"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BellowingAegisaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Bellowing Aegisaur", "Ixalan", "XLN");
  }
}

module.exports = BellowingAegisaur;
