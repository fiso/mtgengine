"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerrasBoonBase = require("../setDD3_DVD/SerrasBoon.js");

class SerrasBoon extends SerrasBoonBase {
  constructor(game) {
    super(game, "Serra's Boon", "Planar Chaos", "PLC");
  }
}

module.exports = SerrasBoon;
