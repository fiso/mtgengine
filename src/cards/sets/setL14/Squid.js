"use strict";
const Constants = require ("../../../Constants");
const SquidBase = require("../setTC16/Squid");

class Squid extends SquidBase {
  constructor (game) {
    super(game, "Squid", "League Tokens 2014", "L14");
  }
}

module.exports = Squid;
