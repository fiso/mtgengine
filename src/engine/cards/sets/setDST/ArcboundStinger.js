"use strict";
const Constants = require ("../../../Constants");
const ArcboundStingerBase = require("../setMMA/ArcboundStinger");

class ArcboundStinger extends ArcboundStingerBase {
  constructor (game) {
    super(game, "Arcbound Stinger", "Darksteel", "DST");
  }
}

module.exports = ArcboundStinger;
