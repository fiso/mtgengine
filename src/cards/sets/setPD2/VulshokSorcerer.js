"use strict";
const Constants = require ("../../../Constants");
const VulshokSorcererBase = require("../setDDI/VulshokSorcerer");

class VulshokSorcerer extends VulshokSorcererBase {
  constructor (game) {
    super(game, "Vulshok Sorcerer", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = VulshokSorcerer;
