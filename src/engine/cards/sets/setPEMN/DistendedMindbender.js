"use strict";
const Constants = require ("../../../Constants");
const DistendedMindbenderBase = require("../setEMN/DistendedMindbender");

class DistendedMindbender extends DistendedMindbenderBase {
  constructor (game) {
    super(game, "Distended Mindbender", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = DistendedMindbender;
