"use strict";
const Constants = require ("../../../Constants");
const PowerofFireBase = require("../setCNS/PowerofFire");

class PowerofFire extends PowerofFireBase {
  constructor (game) {
    super(game, "Power of Fire", "Shadowmoor", "SHM");
  }
}

module.exports = PowerofFire;
