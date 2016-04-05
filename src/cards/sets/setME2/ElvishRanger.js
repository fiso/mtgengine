"use strict";
const Constants = require ("../../../Constants");
const ElvishRangerBase = require("../setALL/ElvishRanger");

class ElvishRanger extends ElvishRangerBase {
  constructor(game) {
    super(game, "Elvish Ranger", "Masters Edition II", "ME2");
  }
}

module.exports = ElvishRanger;
