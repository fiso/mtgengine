"use strict";
const Constants = require ("../../../Constants");
const MuckRatsBase = require("../setS99/MuckRats");

class MuckRats extends MuckRatsBase {
  constructor (game) {
    super(game, "Muck Rats", "Portal", "POR");
  }
}

module.exports = MuckRats;
