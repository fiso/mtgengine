"use strict";
const Constants = require ("../../../Constants");
const LumengridWardenBase = require("../setMRD/LumengridWarden");

class LumengridWarden extends LumengridWardenBase {
  constructor (game) {
    super(game, "Lumengrid Warden", "Tenth Edition", "10E");
  }
}

module.exports = LumengridWarden;
