"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hypochondria extends Card {
  constructor(game) {
    super(game, "Hypochondria", "Torment", "TOR");
  }
}

module.exports = Hypochondria;
