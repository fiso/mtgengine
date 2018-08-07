"use strict";
const Constants = require ("../../../Constants");
const SquidBase = require("../setTC16/Squid");

class Squid extends SquidBase {
  constructor (game) {
    super(game, "Squid", "Magic 2015 Tokens", "TM15");
  }
}

module.exports = Squid;
