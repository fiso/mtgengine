"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vorapede extends UnimplementedCard {
  constructor (game) {
    super(game, "Vorapede", "Dark Ascension", "DKA");
  }
}

module.exports = Vorapede;
