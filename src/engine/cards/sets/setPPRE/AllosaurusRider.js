"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setEVG/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Prerelease Events", "PPRE");
  }
}

module.exports = AllosaurusRider;
