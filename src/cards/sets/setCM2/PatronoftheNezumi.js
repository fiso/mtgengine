"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheNezumi extends UnimplementedCard {
  constructor (game) {
    super(game, "Patron of the Nezumi", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = PatronoftheNezumi;
