"use strict";
const Constants = require ("../../../Constants");
const ReadtheRunesBase = require("../setC16/ReadtheRunes");

class ReadtheRunes extends ReadtheRunesBase {
  constructor (game) {
    super(game, "Read the Runes", "Onslaught", "ONS");
  }
}

module.exports = ReadtheRunes;
