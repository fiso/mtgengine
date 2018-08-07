"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../set8ED/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvishLyrist;
