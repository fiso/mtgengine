"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildfireBase = require("../setMM2/Wildfire.js");

class Wildfire extends WildfireBase {
  constructor(game) {
    super(game, "Wildfire", "Portal Second Age", "PO2");
  }
}

module.exports = Wildfire;
