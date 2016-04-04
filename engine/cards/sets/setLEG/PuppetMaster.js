"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PuppetMasterBase = require("../setCHR/PuppetMaster.js");

class PuppetMaster extends PuppetMasterBase {
  constructor(game) {
    super(game, "Puppet Master", "Legends", "LEG");
  }
}

module.exports = PuppetMaster;
