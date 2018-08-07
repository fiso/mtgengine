"use strict";
const Constants = require ("../../../Constants");
const ElvishFuryBase = require("../setTPR/ElvishFury");

class ElvishFury extends ElvishFuryBase {
  constructor (game) {
    super(game, "Elvish Fury", "Tempest", "TMP");
  }
}

module.exports = ElvishFury;
