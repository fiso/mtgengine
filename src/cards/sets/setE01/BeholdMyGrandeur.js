"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeholdMyGrandeur extends UnimplementedCard {
  constructor (game) {
    super(game, "Behold My Grandeur", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BeholdMyGrandeur;
