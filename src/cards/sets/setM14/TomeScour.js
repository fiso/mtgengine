"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TomeScour extends UnimplementedCard {
  constructor (game) {
    super(game, "Tome Scour", "Magic 2014", "M14");
  }
}

module.exports = TomeScour;
