"use strict";
const Constants = require ("../../../Constants");
const LiltingRefrainBase = require("../setWC00/LiltingRefrain");

class LiltingRefrain extends LiltingRefrainBase {
  constructor (game) {
    super(game, "Lilting Refrain", "Urza's Saga", "USG");
  }
}

module.exports = LiltingRefrain;
