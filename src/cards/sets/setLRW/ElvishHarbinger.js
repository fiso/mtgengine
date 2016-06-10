"use strict";
const Constants = require ("../../../Constants");
const ElvishHarbingerBase = require("../setDD3_EVG/ElvishHarbinger");

class ElvishHarbinger extends ElvishHarbingerBase {
  constructor (game) {
    super(game, "Elvish Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = ElvishHarbinger;
