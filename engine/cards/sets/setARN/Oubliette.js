"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oubliette extends Card {
  constructor(game) {
    super(game, "Oubliette", "Arabian Nights", "ARN");
  }
}

module.exports = Oubliette;
