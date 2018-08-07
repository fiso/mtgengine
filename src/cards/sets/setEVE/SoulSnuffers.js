"use strict";
const Constants = require ("../../../Constants");
const SoulSnuffersBase = require("../setTD2/SoulSnuffers");

class SoulSnuffers extends SoulSnuffersBase {
  constructor (game) {
    super(game, "Soul Snuffers", "Eventide", "EVE");
  }
}

module.exports = SoulSnuffers;
