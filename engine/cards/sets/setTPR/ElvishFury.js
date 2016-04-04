"use strict";
const Constants = require ("../../../Constants");
const ElvishFuryBase = require("../setTMP/ElvishFury");

class ElvishFury extends ElvishFuryBase {
  constructor(game) {
    super(game, "Elvish Fury", "Tempest Remastered", "TPR");
  }
}

module.exports = ElvishFury;
