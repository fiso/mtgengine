"use strict";
const Constants = require ("../../../Constants");
const DeepfathomSkulkerBase = require("../setOGW/DeepfathomSkulker");

class DeepfathomSkulker extends DeepfathomSkulkerBase {
  constructor (game) {
    super(game, "Deepfathom Skulker", "Magic Online Promos", "PRM");
  }
}

module.exports = DeepfathomSkulker;
