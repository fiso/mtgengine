"use strict";
const Constants = require ("../../../Constants");
const LumengridWardenBase = require("../set10E/LumengridWarden");

class LumengridWarden extends LumengridWardenBase {
  constructor (game) {
    super(game, "Lumengrid Warden", "Mirrodin", "MRD");
  }
}

module.exports = LumengridWarden;
