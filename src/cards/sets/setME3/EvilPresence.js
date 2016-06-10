"use strict";
const Constants = require ("../../../Constants");
const EvilPresenceBase = require("../setCED/EvilPresence");

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, "Evil Presence", "Masters Edition III", "ME3");
  }
}

module.exports = EvilPresence;
