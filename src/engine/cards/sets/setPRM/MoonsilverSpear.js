"use strict";
const Constants = require ("../../../Constants");
const MoonsilverSpearBase = require("../setC14/MoonsilverSpear");

class MoonsilverSpear extends MoonsilverSpearBase {
  constructor (game) {
    super(game, "Moonsilver Spear", "Magic Online Promos", "PRM");
  }
}

module.exports = MoonsilverSpear;
