"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sauté extends Card {
  constructor(game) {
    super(game, "Sauté", "Unhinged", "UNH");
  }
}

module.exports = Sauté;
