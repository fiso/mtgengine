"use strict";
const Constants = require ("../../../Constants");
const RagingKavuBase = require("../setPRM/RagingKavu");

class RagingKavu extends RagingKavuBase {
  constructor (game) {
    super(game, "Raging Kavu", "Prerelease Events", "PPRE");
  }
}

module.exports = RagingKavu;
