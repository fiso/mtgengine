"use strict";
const Constants = require ("../../../Constants");
const ElvishRangerBase = require("../setME2/ElvishRanger");

class ElvishRanger extends ElvishRangerBase {
  constructor (game) {
    super(game, "Elvish Ranger", "Portal", "POR");
  }
}

module.exports = ElvishRanger;
