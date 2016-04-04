"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IxidronBase = require("../setC14/Ixidron.js");

class Ixidron extends IxidronBase {
  constructor(game) {
    super(game, "Ixidron", "Time Spiral", "TSP");
  }
}

module.exports = Ixidron;
