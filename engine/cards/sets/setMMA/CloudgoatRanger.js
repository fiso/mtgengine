"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudgoatRangerBase = require("../setLRW/CloudgoatRanger.js");

class CloudgoatRanger extends CloudgoatRangerBase {
  constructor(game) {
    super(game, "Cloudgoat Ranger", "Modern Masters", "MMA");
  }
}

module.exports = CloudgoatRanger;
