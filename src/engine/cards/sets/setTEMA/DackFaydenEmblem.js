"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DackFaydenEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Dack Fayden Emblem", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = DackFaydenEmblem;
