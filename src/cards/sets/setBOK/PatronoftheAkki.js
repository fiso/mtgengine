"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheAkki extends UnimplementedCard {
  constructor(game) {
    super(game, "Patron of the Akki", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheAkki;
