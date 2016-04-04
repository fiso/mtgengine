"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulshokBerserkerBase = require("../setDDI/VulshokBerserker.js");

class VulshokBerserker extends VulshokBerserkerBase {
  constructor(game) {
    super(game, "Vulshok Berserker", "Magic 2011", "M11");
  }
}

module.exports = VulshokBerserker;
