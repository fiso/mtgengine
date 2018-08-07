"use strict";
const Constants = require ("../../../Constants");
const VraskaRelicSeekerBase = require("../setXLN/VraskaRelicSeeker");

class VraskaRelicSeeker extends VraskaRelicSeekerBase {
  constructor (game) {
    super(game, "Vraska, Relic Seeker", "Ixalan Promos", "PXLN");
  }
}

module.exports = VraskaRelicSeeker;
