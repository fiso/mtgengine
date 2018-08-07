"use strict";
const Constants = require ("../../../Constants");
const DeepfathomSkulkerBase = require("../setOGW/DeepfathomSkulker");

class DeepfathomSkulker extends DeepfathomSkulkerBase {
  constructor (game) {
    super(game, "Deepfathom Skulker", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = DeepfathomSkulker;
