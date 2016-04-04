"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchdemonofGreedBase = require("../setDKA/ArchdemonofGreed.js");

class ArchdemonofGreed extends ArchdemonofGreedBase {
  constructor(game) {
    super(game, "Archdemon of Greed", "Prerelease Events", "pPRE");
  }
}

module.exports = ArchdemonofGreed;
