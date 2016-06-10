"use strict";
const Constants = require ("../../../Constants");
const RagingKavuBase = require("../setINV/RagingKavu");

class RagingKavu extends RagingKavuBase {
  constructor (game) {
    super(game, "Raging Kavu", "Prerelease Events", "pPRE");
  }
}

module.exports = RagingKavu;
