"use strict";
const Constants = require ("../../../Constants");
const ThrillKillAssassinBase = require("../setIMA/ThrillKillAssassin");

class ThrillKillAssassin extends ThrillKillAssassinBase {
  constructor (game) {
    super(game, "Thrill-Kill Assassin", "Return to Ravnica", "RTR");
  }
}

module.exports = ThrillKillAssassin;
