"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimFloweringBase = require("../setC14/GrimFlowering.js");

class GrimFlowering extends GrimFloweringBase {
  constructor(game) {
    super(game, "Grim Flowering", "Dark Ascension", "DKA");
  }
}

module.exports = GrimFlowering;
