"use strict";
const Constants = require ("../../../Constants");
const PromiseofPowerBase = require("../setDVD/PromiseofPower");

class PromiseofPower extends PromiseofPowerBase {
  constructor (game) {
    super(game, "Promise of Power", "Mirrodin", "MRD");
  }
}

module.exports = PromiseofPower;
