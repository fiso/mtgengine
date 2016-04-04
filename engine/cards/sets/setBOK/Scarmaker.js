"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scarmaker extends Card {
  constructor(game) {
    super(game, "Scarmaker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Scarmaker;
