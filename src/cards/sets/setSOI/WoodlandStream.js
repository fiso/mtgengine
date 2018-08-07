"use strict";
const Constants = require ("../../../Constants");
const WoodlandStreamBase = require("../setC18/WoodlandStream");

class WoodlandStream extends WoodlandStreamBase {
  constructor (game) {
    super(game, "Woodland Stream", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WoodlandStream;
