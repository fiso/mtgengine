"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlintHawkIdolBase = require("../setMM2/GlintHawkIdol.js");

class GlintHawkIdol extends GlintHawkIdolBase {
  constructor(game) {
    super(game, "Glint Hawk Idol", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GlintHawkIdol;
