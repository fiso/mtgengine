"use strict";
const Constants = require ("../../../Constants");
const SporesowerThallidBase = require("../setMMA/SporesowerThallid");

class SporesowerThallid extends SporesowerThallidBase {
  constructor (game) {
    super(game, "Sporesower Thallid", "Time Spiral", "TSP");
  }
}

module.exports = SporesowerThallid;
