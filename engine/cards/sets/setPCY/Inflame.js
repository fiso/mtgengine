"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InflameBase = require("../setDST/Inflame.js");

class Inflame extends InflameBase {
  constructor(game) {
    super(game, "Inflame", "Prophecy", "PCY");
  }
}

module.exports = Inflame;
