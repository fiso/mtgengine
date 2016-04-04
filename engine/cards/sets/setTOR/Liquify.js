"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Liquify extends Card {
  constructor(game) {
    super(game, "Liquify", "Torment", "TOR");
  }
}

module.exports = Liquify;
