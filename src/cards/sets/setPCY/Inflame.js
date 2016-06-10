"use strict";
const Constants = require ("../../../Constants");
const InflameBase = require("../setDST/Inflame");

class Inflame extends InflameBase {
  constructor (game) {
    super(game, "Inflame", "Prophecy", "PCY");
  }
}

module.exports = Inflame;
