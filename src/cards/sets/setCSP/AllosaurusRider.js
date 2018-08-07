"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setEVG/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Coldsnap", "CSP");
  }
}

module.exports = AllosaurusRider;
