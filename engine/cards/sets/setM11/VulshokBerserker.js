"use strict";
const Constants = require ("../../../Constants");
const VulshokBerserkerBase = require("../setDDI/VulshokBerserker");

class VulshokBerserker extends VulshokBerserkerBase {
  constructor(game) {
    super(game, "Vulshok Berserker", "Magic 2011", "M11");
  }
}

module.exports = VulshokBerserker;
