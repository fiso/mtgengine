"use strict";
const Constants = require ("../../../Constants");
const PestilenceDemonBase = require("../setDDR/PestilenceDemon");

class PestilenceDemon extends PestilenceDemonBase {
  constructor (game) {
    super(game, "Pestilence Demon", "Commander 2014", "C14");
  }
}

module.exports = PestilenceDemon;
