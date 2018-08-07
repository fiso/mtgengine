"use strict";
const Constants = require ("../../../Constants");
const CalloftheHerdBase = require("../setDDS/CalloftheHerd");

class CalloftheHerd extends CalloftheHerdBase {
  constructor (game) {
    super(game, "Call of the Herd", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CalloftheHerd;
