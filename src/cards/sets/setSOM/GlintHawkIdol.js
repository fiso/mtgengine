"use strict";
const Constants = require ("../../../Constants");
const GlintHawkIdolBase = require("../setMM2/GlintHawkIdol");

class GlintHawkIdol extends GlintHawkIdolBase {
  constructor (game) {
    super(game, "Glint Hawk Idol", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GlintHawkIdol;
