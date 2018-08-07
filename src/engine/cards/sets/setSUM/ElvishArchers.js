"use strict";
const Constants = require ("../../../Constants");
const ElvishArchersBase = require("../set7ED/ElvishArchers");

class ElvishArchers extends ElvishArchersBase {
  constructor (game) {
    super(game, "Elvish Archers", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ElvishArchers;
