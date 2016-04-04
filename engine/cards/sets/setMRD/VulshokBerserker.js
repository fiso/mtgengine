"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulshokBerserkerBase = require("../setDDI/VulshokBerserker.js");

class VulshokBerserker extends VulshokBerserkerBase {
  constructor(game) {
    super(game, "Vulshok Berserker", "Mirrodin", "MRD");
  }
}

module.exports = VulshokBerserker;
