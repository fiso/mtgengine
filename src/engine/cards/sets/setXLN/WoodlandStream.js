"use strict";
const Constants = require ("../../../Constants");
const WoodlandStreamBase = require("../setC18/WoodlandStream");

class WoodlandStream extends WoodlandStreamBase {
  constructor (game) {
    super(game, "Woodland Stream", "Ixalan", "XLN");
  }
}

module.exports = WoodlandStream;
