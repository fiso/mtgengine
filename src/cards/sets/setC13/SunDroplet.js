"use strict";
const Constants = require ("../../../Constants");
const SunDropletBase = require("../setARC/SunDroplet");

class SunDroplet extends SunDropletBase {
  constructor (game) {
    super(game, "Sun Droplet", "Commander 2013 Edition", "C13");
  }
}

module.exports = SunDroplet;
