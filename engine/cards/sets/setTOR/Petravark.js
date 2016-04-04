"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Petravark extends Card {
  constructor(game) {
    super(game, "Petravark", "Torment", "TOR");
  }
}

module.exports = Petravark;
