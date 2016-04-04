"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquelchingLeeches extends Card {
  constructor(game) {
    super(game, "Squelching Leeches", "Journey into Nyx", "JOU");
  }
}

module.exports = SquelchingLeeches;
