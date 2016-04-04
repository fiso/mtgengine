"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AffaGuardHoundBase = require("../setDDP/AffaGuardHound.js");

class AffaGuardHound extends AffaGuardHoundBase {
  constructor(game) {
    super(game, "Affa Guard Hound", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AffaGuardHound;
