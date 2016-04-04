"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunDropletBase = require("../setARC/SunDroplet.js");

class SunDroplet extends SunDropletBase {
  constructor(game) {
    super(game, "Sun Droplet", "Mirrodin", "MRD");
  }
}

module.exports = SunDroplet;
