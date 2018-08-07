"use strict";
const Constants = require ("../../../Constants");
const GrimFloweringBase = require("../setCMA/GrimFlowering");

class GrimFlowering extends GrimFloweringBase {
  constructor (game) {
    super(game, "Grim Flowering", "Dark Ascension", "DKA");
  }
}

module.exports = GrimFlowering;
