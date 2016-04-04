"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulshokSorcererBase = require("../setDDI/VulshokSorcerer.js");

class VulshokSorcerer extends VulshokSorcererBase {
  constructor(game) {
    super(game, "Vulshok Sorcerer", "Fifth Dawn", "5DN");
  }
}

module.exports = VulshokSorcerer;
