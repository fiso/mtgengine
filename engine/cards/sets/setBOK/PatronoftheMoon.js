"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronoftheMoon extends Card {
  constructor(game) {
    super(game, "Patron of the Moon", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PatronoftheMoon;
