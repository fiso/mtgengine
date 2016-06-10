"use strict";
const Constants = require ("../../../Constants");
const ElvishArchersBase = require("../set6ED/ElvishArchers");

class ElvishArchers extends ElvishArchersBase {
  constructor (game) {
    super(game, "Elvish Archers", "Seventh Edition", "7ED");
  }
}

module.exports = ElvishArchers;
