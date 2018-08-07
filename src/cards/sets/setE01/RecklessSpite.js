"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessSpite extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Spite", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = RecklessSpite;
