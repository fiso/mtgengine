"use strict";
const Constants = require ("../../../Constants");
const PuppetMasterBase = require("../setCHR/PuppetMaster");

class PuppetMaster extends PuppetMasterBase {
  constructor (game) {
    super(game, "Puppet Master", "Legends", "LEG");
  }
}

module.exports = PuppetMaster;
