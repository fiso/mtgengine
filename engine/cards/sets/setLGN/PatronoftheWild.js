"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheWild extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Wild", "Legions", "LGN");
  }
}

module.exports = PatronoftheWild;
