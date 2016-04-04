"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheNezumi extends Card {
  constructor(game) {
    super(game, "Patron of the Nezumi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheNezumi;
