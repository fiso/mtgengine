"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctuaryCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctuary Cat", "Dark Ascension", "DKA");
  }
}

module.exports = SanctuaryCat;
