"use strict";
const Constants = require ("../../../Constants");
const VanquishersBannerBase = require("../setXLN/VanquishersBanner");

class VanquishersBanner extends VanquishersBannerBase {
  constructor (game) {
    super(game, "Vanquisher's Banner", "Ixalan Promos", "PXLN");
  }
}

module.exports = VanquishersBanner;
