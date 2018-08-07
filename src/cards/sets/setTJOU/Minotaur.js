"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Minotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur", "Journey into Nyx Tokens", "TJOU");
  }
}

module.exports = Minotaur;
