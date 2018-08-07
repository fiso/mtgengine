"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel's Mercy", "Magic 2013", "M13");
  }
}

module.exports = AngelsMercy;
