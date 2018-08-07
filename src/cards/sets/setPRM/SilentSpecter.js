"use strict";
const Constants = require ("../../../Constants");
const SilentSpecterBase = require("../setONS/SilentSpecter");

class SilentSpecter extends SilentSpecterBase {
  constructor (game) {
    super(game, "Silent Specter", "Magic Online Promos", "PRM");
  }
}

module.exports = SilentSpecter;
