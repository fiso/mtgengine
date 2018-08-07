"use strict";
const Constants = require ("../../../Constants");
const WildheartInvokerBase = require("../setDDU/WildheartInvoker");

class WildheartInvoker extends WildheartInvokerBase {
  constructor (game) {
    super(game, "Wildheart Invoker", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = WildheartInvoker;
