"use strict";
const Constants = require ("../../../Constants");
const OkkBase = require("../set8ED/Okk");

class Okk extends OkkBase {
  constructor (game) {
    super(game, "Okk", "Urza's Saga", "USG");
  }
}

module.exports = Okk;
