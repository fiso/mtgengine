"use strict";
const Constants = require ("../../../Constants");
const PromiseofPowerBase = require("../setDVD/PromiseofPower");

class PromiseofPower extends PromiseofPowerBase {
  constructor (game) {
    super(game, "Promise of Power", "Commander 2014", "C14");
  }
}

module.exports = PromiseofPower;
