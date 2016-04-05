"use strict";
const Constants = require ("../../../Constants");
const ZephyrFalconBase = require("../set5ED/ZephyrFalcon");

class ZephyrFalcon extends ZephyrFalconBase {
  constructor(game) {
    super(game, "Zephyr Falcon", "Fourth Edition", "4ED");
  }
}

module.exports = ZephyrFalcon;
