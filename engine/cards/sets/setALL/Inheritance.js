"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inheritance extends Card {
  constructor(game) {
    super(game, "Inheritance", "Alliances", "ALL");
  }
}

module.exports = Inheritance;
