"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WingsofAesthirBase = require("../setCST/WingsofAesthir.js");

class WingsofAesthir extends WingsofAesthirBase {
  constructor(game) {
    super(game, "Wings of Aesthir", "Ice Age", "ICE");
  }
}

module.exports = WingsofAesthir;
