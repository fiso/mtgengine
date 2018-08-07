"use strict";
const Constants = require ("../../../Constants");
const MoongloveWinnowerBase = require("../setDPA/MoongloveWinnower");

class MoongloveWinnower extends MoongloveWinnowerBase {
  constructor (game) {
    super(game, "Moonglove Winnower", "Lorwyn", "LRW");
  }
}

module.exports = MoongloveWinnower;
