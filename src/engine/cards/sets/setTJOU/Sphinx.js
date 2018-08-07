"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx", "Journey into Nyx Tokens", "TJOU");
  }
}

module.exports = Sphinx;
