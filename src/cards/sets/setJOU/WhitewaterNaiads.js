"use strict";
const Constants = require ("../../../Constants");
const WhitewaterNaiadsBase = require("../setC18/WhitewaterNaiads");

class WhitewaterNaiads extends WhitewaterNaiadsBase {
  constructor (game) {
    super(game, "Whitewater Naiads", "Journey into Nyx", "JOU");
  }
}

module.exports = WhitewaterNaiads;
