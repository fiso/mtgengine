"use strict";
const Constants = require ("../../../Constants");
const WoodedBastionBase = require("../setEXP/WoodedBastion");

class WoodedBastion extends WoodedBastionBase {
  constructor (game) {
    super(game, "Wooded Bastion", "Shadowmoor", "SHM");
  }
}

module.exports = WoodedBastion;
