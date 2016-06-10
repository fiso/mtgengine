"use strict";
const Constants = require ("../../../Constants");
const WoodSageBase = require("../setCNS/WoodSage");

class WoodSage extends WoodSageBase {
  constructor (game) {
    super(game, "Wood Sage", "Tempest Remastered", "TPR");
  }
}

module.exports = WoodSage;
