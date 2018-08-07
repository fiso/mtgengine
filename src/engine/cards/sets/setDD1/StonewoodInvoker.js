"use strict";
const Constants = require ("../../../Constants");
const StonewoodInvokerBase = require("../setEVG/StonewoodInvoker");

class StonewoodInvoker extends StonewoodInvokerBase {
  constructor (game) {
    super(game, "Stonewood Invoker", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = StonewoodInvoker;
