"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PromiseofPowerBase = require("../setC14/PromiseofPower.js");

class PromiseofPower extends PromiseofPowerBase {
  constructor(game) {
    super(game, "Promise of Power", "Mirrodin", "MRD");
  }
}

module.exports = PromiseofPower;
