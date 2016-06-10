"use strict";
const Constants = require ("../../../Constants");
const StonewoodInvokerBase = require("../setDD3_EVG/StonewoodInvoker");

class StonewoodInvoker extends StonewoodInvokerBase {
  constructor (game) {
    super(game, "Stonewood Invoker", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = StonewoodInvoker;
