"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sindbad extends Card {
  constructor(game) {
    super(game, "Sindbad", "Arabian Nights", "ARN");
  }
}

module.exports = Sindbad;
