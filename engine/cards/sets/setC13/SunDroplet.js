"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunDropletBase = require("../setARC/SunDroplet.js");

class SunDroplet extends SunDropletBase {
  constructor(game) {
    super(game, "Sun Droplet", "Commander 2013 Edition", "C13");
  }
}

module.exports = SunDroplet;
