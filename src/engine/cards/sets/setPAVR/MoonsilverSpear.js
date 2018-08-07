"use strict";
const Constants = require ("../../../Constants");
const MoonsilverSpearBase = require("../setC14/MoonsilverSpear");

class MoonsilverSpear extends MoonsilverSpearBase {
  constructor (game) {
    super(game, "Moonsilver Spear", "Avacyn Restored Promos", "PAVR");
  }
}

module.exports = MoonsilverSpear;
