"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Compulsion extends Card {
  constructor(game) {
    super(game, "Compulsion", "Torment", "TOR");
  }
}

module.exports = Compulsion;
