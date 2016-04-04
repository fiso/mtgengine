"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhoxPikemaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhox Pikemaster", "Magic 2010", "M10");
  }
}

module.exports = RhoxPikemaster;
