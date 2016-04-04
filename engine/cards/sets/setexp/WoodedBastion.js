"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodedBastionBase = require("../setSHM/WoodedBastion.js");

class WoodedBastion extends WoodedBastionBase {
  constructor(game) {
    super(game, "Wooded Bastion", "Zendikar Expedition", "EXP");
  }
}

module.exports = WoodedBastion;
