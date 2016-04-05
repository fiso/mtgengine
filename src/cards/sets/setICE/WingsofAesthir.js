"use strict";
const Constants = require ("../../../Constants");
const WingsofAesthirBase = require("../setCST/WingsofAesthir");

class WingsofAesthir extends WingsofAesthirBase {
  constructor(game) {
    super(game, "Wings of Aesthir", "Ice Age", "ICE");
  }
}

module.exports = WingsofAesthir;
