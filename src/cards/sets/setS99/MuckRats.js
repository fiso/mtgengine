"use strict";
const Constants = require ("../../../Constants");
const MuckRatsBase = require("../setPOR/MuckRats");

class MuckRats extends MuckRatsBase {
  constructor (game) {
    super(game, "Muck Rats", "Starter 1999", "S99");
  }
}

module.exports = MuckRats;
