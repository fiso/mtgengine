"use strict";
const Constants = require ("../../../Constants");
const ArcboundStingerBase = require("../setDST/ArcboundStinger");

class ArcboundStinger extends ArcboundStingerBase {
  constructor (game) {
    super(game, "Arcbound Stinger", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundStinger;
