"use strict";
const Constants = require ("../../../Constants");
const ElvishArchersBase = require("../set6ED/ElvishArchers");

class ElvishArchers extends ElvishArchersBase {
  constructor(game) {
    super(game, "Elvish Archers", "Fifth Edition", "5ED");
  }
}

module.exports = ElvishArchers;
