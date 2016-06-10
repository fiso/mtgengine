"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronoftheKitsune extends UnimplementedCard {
  constructor (game) {
    super(game, "Patron of the Kitsune", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheKitsune;
