"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheOrochi extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Orochi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheOrochi;
