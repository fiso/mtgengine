"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheValiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Valiant", "Magic Origins", "ORI");
  }
}

module.exports = PatronoftheValiant;
