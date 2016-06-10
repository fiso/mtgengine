"use strict";
const Constants = require ("../../../Constants");
const EvilPresenceBase = require("../setCED/EvilPresence");

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, "Evil Presence", "International Collector's Edition", "CEI");
  }
}

module.exports = EvilPresence;
