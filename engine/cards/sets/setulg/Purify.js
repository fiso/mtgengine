"use strict";
const Constants = require ("../../../Constants");
const PurifyBase = require("../set7ED/Purify");

class Purify extends PurifyBase {
  constructor(game) {
    super(game, "Purify", "Urza's Legacy", "ULG");
  }
}

module.exports = Purify;
