"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../set8ED/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "World Championship Decks 1999", "WC99");
  }
}

module.exports = ElvishLyrist;
