"use strict";
const Constants = require ("../../../Constants");
const MoonsilverSpearBase = require("../setAVR/MoonsilverSpear");

class MoonsilverSpear extends MoonsilverSpearBase {
  constructor (game) {
    super(game, "Moonsilver Spear", "Prerelease Events", "pPRE");
  }
}

module.exports = MoonsilverSpear;
