"use strict";
const Constants = require ("../../../Constants");
const MeganticSliverBase = require("../setM14/MeganticSliver");

class MeganticSliver extends MeganticSliverBase {
  constructor(game) {
    super(game, "Megantic Sliver", "Prerelease Events", "pPRE");
  }
}

module.exports = MeganticSliver;
