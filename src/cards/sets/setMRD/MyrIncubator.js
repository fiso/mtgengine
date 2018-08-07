"use strict";
const Constants = require ("../../../Constants");
const MyrIncubatorBase = require("../setWC04/MyrIncubator");

class MyrIncubator extends MyrIncubatorBase {
  constructor (game) {
    super(game, "Myr Incubator", "Mirrodin", "MRD");
  }
}

module.exports = MyrIncubator;
