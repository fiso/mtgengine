"use strict";
const Constants = require ("../../../Constants");
const WoodSageBase = require("../setCNS/WoodSage");

class WoodSage extends WoodSageBase {
  constructor (game) {
    super(game, "Wood Sage", "Tempest", "TMP");
  }
}

module.exports = WoodSage;
