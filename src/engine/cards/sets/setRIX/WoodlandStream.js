"use strict";
const Constants = require ("../../../Constants");
const WoodlandStreamBase = require("../setC18/WoodlandStream");

class WoodlandStream extends WoodlandStreamBase {
  constructor (game) {
    super(game, "Woodland Stream", "Rivals of Ixalan", "RIX");
  }
}

module.exports = WoodlandStream;
