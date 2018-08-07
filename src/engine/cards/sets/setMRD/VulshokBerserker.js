"use strict";
const Constants = require ("../../../Constants");
const VulshokBerserkerBase = require("../setDDI/VulshokBerserker");

class VulshokBerserker extends VulshokBerserkerBase {
  constructor (game) {
    super(game, "Vulshok Berserker", "Mirrodin", "MRD");
  }
}

module.exports = VulshokBerserker;
