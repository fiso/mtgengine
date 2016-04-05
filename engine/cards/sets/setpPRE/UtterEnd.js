"use strict";
const Constants = require ("../../../Constants");
const UtterEndBase = require("../setKTK/UtterEnd");

class UtterEnd extends UtterEndBase {
  constructor(game) {
    super(game, "Utter End", "Prerelease Events", "pPRE");
  }
}

module.exports = UtterEnd;
