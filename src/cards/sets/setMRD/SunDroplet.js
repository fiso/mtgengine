"use strict";
const Constants = require ("../../../Constants");
const SunDropletBase = require("../setC13/SunDroplet");

class SunDroplet extends SunDropletBase {
  constructor (game) {
    super(game, "Sun Droplet", "Mirrodin", "MRD");
  }
}

module.exports = SunDroplet;
