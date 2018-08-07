"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralCornucopia extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Cornucopia", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = AstralCornucopia;
