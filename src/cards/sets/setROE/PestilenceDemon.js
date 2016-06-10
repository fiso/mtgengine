"use strict";
const Constants = require ("../../../Constants");
const PestilenceDemonBase = require("../setC14/PestilenceDemon");

class PestilenceDemon extends PestilenceDemonBase {
  constructor (game) {
    super(game, "Pestilence Demon", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PestilenceDemon;
