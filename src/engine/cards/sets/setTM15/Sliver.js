"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver", "Magic 2015 Tokens", "TM15");
  }
}

module.exports = Sliver;
