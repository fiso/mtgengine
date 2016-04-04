"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReadtheRunes extends Card {
  constructor(game) {
    super(game, "Read the Runes", "Onslaught", "ONS");
  }
}

module.exports = ReadtheRunes;
