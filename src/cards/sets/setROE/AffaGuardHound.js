"use strict";
const Constants = require ("../../../Constants");
const AffaGuardHoundBase = require("../setDDP/AffaGuardHound");

class AffaGuardHound extends AffaGuardHoundBase {
  constructor (game) {
    super(game, "Affa Guard Hound", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AffaGuardHound;
