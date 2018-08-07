"use strict";
const Constants = require ("../../../Constants");
const LanternScoutBase = require("../setBFZ/LanternScout");

class LanternScout extends LanternScoutBase {
  constructor (game) {
    super(game, "Lantern Scout", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = LanternScout;
