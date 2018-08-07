"use strict";
const Constants = require ("../../../Constants");
const EvilPresenceBase = require("../setNPH/EvilPresence");

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, "Evil Presence", "Collectors’ Edition", "CED");
  }
}

module.exports = EvilPresence;
