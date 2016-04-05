"use strict";
const Constants = require ("../../../Constants");
const WoodedBastionBase = require("../setSHM/WoodedBastion");

class WoodedBastion extends WoodedBastionBase {
  constructor(game) {
    super(game, "Wooded Bastion", "Zendikar Expedition", "EXP");
  }
}

module.exports = WoodedBastion;
