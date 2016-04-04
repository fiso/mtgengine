"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scour extends Card {
  constructor(game) {
    super(game, "Scour", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Scour;
