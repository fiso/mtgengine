"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisruptBase = require("../setINV/Disrupt.js");

class Disrupt extends DisruptBase {
  constructor(game) {
    super(game, "Disrupt", "Weatherlight", "WTH");
  }
}

module.exports = Disrupt;
