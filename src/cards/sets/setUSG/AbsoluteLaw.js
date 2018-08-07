"use strict";
const Constants = require ("../../../Constants");
const AbsoluteLawBase = require("../setWC00/AbsoluteLaw");

class AbsoluteLaw extends AbsoluteLawBase {
  constructor (game) {
    super(game, "Absolute Law", "Urza's Saga", "USG");
  }
}

module.exports = AbsoluteLaw;
