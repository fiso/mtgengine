"use strict";
const Constants = require ("../../../Constants");
const CloudgoatRangerBase = require("../setLRW/CloudgoatRanger");

class CloudgoatRanger extends CloudgoatRangerBase {
  constructor(game) {
    super(game, "Cloudgoat Ranger", "Modern Masters", "MMA");
  }
}

module.exports = CloudgoatRanger;
