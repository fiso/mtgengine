"use strict";
const Constants = require ("../../../Constants");
const SparkmageApprenticeBase = require("../setDDN/SparkmageApprentice");

class SparkmageApprentice extends SparkmageApprenticeBase {
  constructor (game) {
    super(game, "Sparkmage Apprentice", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SparkmageApprentice;
