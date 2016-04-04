"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VulshokBattlegearBase = require("../setDDI/VulshokBattlegear.js");

class VulshokBattlegear extends VulshokBattlegearBase {
  constructor(game) {
    super(game, "Vulshok Battlegear", "Mirrodin", "MRD");
  }
}

module.exports = VulshokBattlegear;
