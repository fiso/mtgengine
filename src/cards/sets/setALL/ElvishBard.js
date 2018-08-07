"use strict";
const Constants = require ("../../../Constants");
const ElvishBardBase = require("../set9ED/ElvishBard");

class ElvishBard extends ElvishBardBase {
  constructor (game) {
    super(game, "Elvish Bard", "Alliances", "ALL");
  }
}

module.exports = ElvishBard;
