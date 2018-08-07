"use strict";
const Constants = require ("../../../Constants");
const ElvishLyristBase = require("../set8ED/ElvishLyrist");

class ElvishLyrist extends ElvishLyristBase {
  constructor (game) {
    super(game, "Elvish Lyrist", "Junior Super Series", "PSUS");
  }
}

module.exports = ElvishLyrist;
