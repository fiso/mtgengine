"use strict";
const Constants = require ("../../../Constants");
const GhostfireBase = require("../setDDT/Ghostfire");

class Ghostfire extends GhostfireBase {
  constructor (game) {
    super(game, "Ghostfire", "Future Sight", "FUT");
  }
}

module.exports = Ghostfire;
