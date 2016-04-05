"use strict";
const Constants = require ("../../../Constants");
const TrailofMysteryBase = require("../setKTK/TrailofMystery");

class TrailofMystery extends TrailofMysteryBase {
  constructor(game) {
    super(game, "Trail of Mystery", "Prerelease Events", "pPRE");
  }
}

module.exports = TrailofMystery;
