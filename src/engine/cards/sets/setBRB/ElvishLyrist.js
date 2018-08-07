"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../set8ED/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ElvishLyrist;
