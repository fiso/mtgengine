"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloryBase = require("../setJUD/Glory.js");

class Glory extends GloryBase {
  constructor(game) {
    super(game, "Glory", "Prerelease Events", "pPRE");
  }
}

module.exports = Glory;
