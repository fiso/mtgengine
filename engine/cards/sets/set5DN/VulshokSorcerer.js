"use strict";
const Constants = require ("../../../Constants");
const VulshokSorcererBase = require("../setDDI/VulshokSorcerer");

class VulshokSorcerer extends VulshokSorcererBase {
  constructor(game) {
    super(game, "Vulshok Sorcerer", "Fifth Dawn", "5DN");
  }
}

module.exports = VulshokSorcerer;
