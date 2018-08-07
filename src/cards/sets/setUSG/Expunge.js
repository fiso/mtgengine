"use strict";
const Constants = require ("../../../Constants");
const ExpungeBase = require("../setVMA/Expunge");

class Expunge extends ExpungeBase {
  constructor (game) {
    super(game, "Expunge", "Urza's Saga", "USG");
  }
}

module.exports = Expunge;
