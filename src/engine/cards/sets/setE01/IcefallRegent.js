"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcefallRegent extends UnimplementedCard {
  constructor (game) {
    super(game, "Icefall Regent", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = IcefallRegent;
