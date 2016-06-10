"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TokTokVolcanoBorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Tok-Tok, Volcano Born", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TokTokVolcanoBorn;
