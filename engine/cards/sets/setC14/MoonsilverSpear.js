"use strict";
const Constants = require ("../../../Constants");
const MoonsilverSpearBase = require("../setAVR/MoonsilverSpear");

class MoonsilverSpear extends MoonsilverSpearBase {
  constructor(game) {
    super(game, "Moonsilver Spear", "Commander 2014", "C14");
  }
}

module.exports = MoonsilverSpear;
