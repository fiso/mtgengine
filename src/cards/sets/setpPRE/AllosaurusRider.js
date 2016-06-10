"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setCSP/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Prerelease Events", "pPRE");
  }
}

module.exports = AllosaurusRider;
