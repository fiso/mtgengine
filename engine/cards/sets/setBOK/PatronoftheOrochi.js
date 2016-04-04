"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheOrochi extends Card {
  constructor(game) {
    super(game, "Patron of the Orochi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheOrochi;
