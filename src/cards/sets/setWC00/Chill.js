"use strict";
const Constants = require ("../../../Constants");
const ChillBase = require("../setPRM/Chill");

class Chill extends ChillBase {
  constructor (game) {
    super(game, "Chill", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Chill;
