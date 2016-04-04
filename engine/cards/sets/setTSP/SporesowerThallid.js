"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SporesowerThallidBase = require("../setMMA/SporesowerThallid.js");

class SporesowerThallid extends SporesowerThallidBase {
  constructor(game) {
    super(game, "Sporesower Thallid", "Time Spiral", "TSP");
  }
}

module.exports = SporesowerThallid;
