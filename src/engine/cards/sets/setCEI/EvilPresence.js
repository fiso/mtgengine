"use strict";
const Constants = require ("../../../Constants");
const EvilPresenceBase = require("../setNPH/EvilPresence");

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, "Evil Presence", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = EvilPresence;
