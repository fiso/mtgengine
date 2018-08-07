"use strict";
const Constants = require ("../../../Constants");
const GraftedExoskeletonBase = require("../setTD2/GraftedExoskeleton");

class GraftedExoskeleton extends GraftedExoskeletonBase {
  constructor (game) {
    super(game, "Grafted Exoskeleton", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GraftedExoskeleton;
