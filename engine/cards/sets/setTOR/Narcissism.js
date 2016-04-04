"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Narcissism extends Card {
  constructor(game) {
    super(game, "Narcissism", "Torment", "TOR");
  }
}

module.exports = Narcissism;
