"use strict";
const Constants = require ("../../../Constants");
const SunDropletBase = require("../setC13/SunDroplet");

class SunDroplet extends SunDropletBase {
  constructor (game) {
    super(game, "Sun Droplet", "Archenemy", "ARC");
  }
}

module.exports = SunDroplet;
