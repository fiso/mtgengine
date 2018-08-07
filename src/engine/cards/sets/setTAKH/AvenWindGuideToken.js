"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenWindGuideToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Wind Guide Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = AvenWindGuideToken;
