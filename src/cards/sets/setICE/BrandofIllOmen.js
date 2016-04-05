"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrandofIllOmen extends UnimplementedCard {
  constructor(game) {
    super(game, "Brand of Ill Omen", "Ice Age", "ICE");
  }
}

module.exports = BrandofIllOmen;
