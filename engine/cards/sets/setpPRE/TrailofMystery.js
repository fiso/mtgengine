"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrailofMysteryBase = require("../setKTK/TrailofMystery.js");

class TrailofMystery extends TrailofMysteryBase {
  constructor(game) {
    super(game, "Trail of Mystery", "Prerelease Events", "pPRE");
  }
}

module.exports = TrailofMystery;
