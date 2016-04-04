"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostfireBase = require("../setDDG/Ghostfire.js");

class Ghostfire extends GhostfireBase {
  constructor(game) {
    super(game, "Ghostfire", "Future Sight", "FUT");
  }
}

module.exports = Ghostfire;
