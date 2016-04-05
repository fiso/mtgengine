"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheNezumi extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Nezumi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheNezumi;
