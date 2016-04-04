"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowerofFireBase = require("../setCNS/PowerofFire.js");

class PowerofFire extends PowerofFireBase {
  constructor(game) {
    super(game, "Power of Fire", "Shadowmoor", "SHM");
  }
}

module.exports = PowerofFire;
