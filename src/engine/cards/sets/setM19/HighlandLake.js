"use strict";
const Constants = require ("../../../Constants");
const HighlandLakeBase = require("../setC18/HighlandLake");

class HighlandLake extends HighlandLakeBase {
  constructor (game) {
    super(game, "Highland Lake", "Core Set 2019", "M19");
  }
}

module.exports = HighlandLake;
