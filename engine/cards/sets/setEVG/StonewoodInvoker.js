"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StonewoodInvokerBase = require("../setDD3_EVG/StonewoodInvoker.js");

class StonewoodInvoker extends StonewoodInvokerBase {
  constructor(game) {
    super(game, "Stonewood Invoker", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = StonewoodInvoker;
