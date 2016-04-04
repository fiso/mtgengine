"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TomeScour extends UnimplementedCard {
  constructor(game) {
    super(game, "Tome Scour", "Magic 2010", "M10");
  }
}

module.exports = TomeScour;
