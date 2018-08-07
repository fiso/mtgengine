"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../set8ED/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "Seventh Edition", "7ED");
  }
}

module.exports = ElvishLyrist;
