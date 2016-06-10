"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralCornucopia extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Cornucopia", "Born of the Gods", "BNG");
  }
}

module.exports = AstralCornucopia;
