"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TangleWireBase = require("../setV13/TangleWire.js");

class TangleWire extends TangleWireBase {
  constructor(game) {
    super(game, "Tangle Wire", "Nemesis", "NMS");
  }
}

module.exports = TangleWire;
