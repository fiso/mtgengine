"use strict";
const Constants = require ("../../../Constants");
const CalloftheWildBase = require("../set8ED/CalloftheWild");

class CalloftheWild extends CalloftheWildBase {
  constructor (game) {
    super(game, "Call of the Wild", "Weatherlight", "WTH");
  }
}

module.exports = CalloftheWild;
