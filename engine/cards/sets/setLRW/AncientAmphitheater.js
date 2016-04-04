"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientAmphitheaterBase = require("../setC15/AncientAmphitheater.js");

class AncientAmphitheater extends AncientAmphitheaterBase {
  constructor(game) {
    super(game, "Ancient Amphitheater", "Lorwyn", "LRW");
  }
}

module.exports = AncientAmphitheater;
