"use strict";
const Constants = require ("../../../Constants");
const SunDropletBase = require("../setARC/SunDroplet");

class SunDroplet extends SunDropletBase {
  constructor(game) {
    super(game, "Sun Droplet", "Mirrodin", "MRD");
  }
}

module.exports = SunDroplet;
