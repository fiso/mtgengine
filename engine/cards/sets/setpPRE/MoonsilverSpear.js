"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoonsilverSpearBase = require("../setAVR/MoonsilverSpear.js");

class MoonsilverSpear extends MoonsilverSpearBase {
  constructor(game) {
    super(game, "Moonsilver Spear", "Prerelease Events", "pPRE");
  }
}

module.exports = MoonsilverSpear;
