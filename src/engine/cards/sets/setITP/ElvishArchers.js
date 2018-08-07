"use strict";
const Constants = require ("../../../Constants");
const ElvishArchersBase = require("../set7ED/ElvishArchers");

class ElvishArchers extends ElvishArchersBase {
  constructor (game) {
    super(game, "Elvish Archers", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ElvishArchers;
