"use strict";
const Constants = require ("../../../Constants");
const AncientAmphitheaterBase = require("../setCM2/AncientAmphitheater");

class AncientAmphitheater extends AncientAmphitheaterBase {
  constructor (game) {
    super(game, "Ancient Amphitheater", "Lorwyn", "LRW");
  }
}

module.exports = AncientAmphitheater;
