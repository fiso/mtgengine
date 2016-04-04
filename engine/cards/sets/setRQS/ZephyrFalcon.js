"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZephyrFalconBase = require("../set5ED/ZephyrFalcon.js");

class ZephyrFalcon extends ZephyrFalconBase {
  constructor(game) {
    super(game, "Zephyr Falcon", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = ZephyrFalcon;
