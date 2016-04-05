"use strict";
const Constants = require ("../../../Constants");
const ExpungeBase = require("../setUSG/Expunge");

class Expunge extends ExpungeBase {
  constructor(game) {
    super(game, "Expunge", "Vintage Masters", "VMA");
  }
}

module.exports = Expunge;
