"use strict";
const Constants = require ("../../../Constants");
const CloudgoatRangerBase = require("../setMMA/CloudgoatRanger");

class CloudgoatRanger extends CloudgoatRangerBase {
  constructor (game) {
    super(game, "Cloudgoat Ranger", "Lorwyn", "LRW");
  }
}

module.exports = CloudgoatRanger;
