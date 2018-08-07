"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ragavan extends UnimplementedCard {
  constructor (game) {
    super(game, "Ragavan", "Aether Revolt Tokens", "TAER");
  }
}

module.exports = Ragavan;
