"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheKitsune extends Card {
  constructor(game) {
    super(game, "Patron of the Kitsune", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheKitsune;
