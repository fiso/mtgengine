"use strict";
const Constants = require ("../../../Constants");
const VulshokBattlegearBase = require("../setDDI/VulshokBattlegear");

class VulshokBattlegear extends VulshokBattlegearBase {
  constructor (game) {
    super(game, "Vulshok Battlegear", "Mirrodin", "MRD");
  }
}

module.exports = VulshokBattlegear;
