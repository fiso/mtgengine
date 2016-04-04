"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulshokSorcererBase = require("../setDDI/VulshokSorcerer.js");

class VulshokSorcerer extends VulshokSorcererBase {
  constructor(game) {
    super(game, "Vulshok Sorcerer", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = VulshokSorcerer;
