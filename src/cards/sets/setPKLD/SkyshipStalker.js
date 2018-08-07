"use strict";
const Constants = require ("../../../Constants");
const SkyshipStalkerBase = require("../setKLD/SkyshipStalker");

class SkyshipStalker extends SkyshipStalkerBase {
  constructor (game) {
    super(game, "Skyship Stalker", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SkyshipStalker;
