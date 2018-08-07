"use strict";
const Constants = require ("../../../Constants");
const MuckRatsBase = require("../setS99/MuckRats");

class MuckRats extends MuckRatsBase {
  constructor (game) {
    super(game, "Muck Rats", "Portal Second Age", "P02");
  }
}

module.exports = MuckRats;
