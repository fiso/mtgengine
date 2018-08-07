"use strict";
const Constants = require ("../../../Constants");
const CalloftheWildBase = require("../set8ED/CalloftheWild");

class CalloftheWild extends CalloftheWildBase {
  constructor (game) {
    super(game, "Call of the Wild", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CalloftheWild;
