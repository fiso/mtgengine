"use strict";
const Constants = require ("../../../Constants");
const WoodSageBase = require("../setTPR/WoodSage");

class WoodSage extends WoodSageBase {
  constructor (game) {
    super(game, "Wood Sage", "Conspiracy", "CNS");
  }
}

module.exports = WoodSage;
