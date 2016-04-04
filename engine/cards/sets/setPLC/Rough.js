"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoughBase = require("../setC13/Rough.js");

class Rough extends RoughBase {
  constructor(game) {
    super(game, "Rough", "Planar Chaos", "PLC");
  }
}

module.exports = Rough;
