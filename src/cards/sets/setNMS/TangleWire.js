"use strict";
const Constants = require ("../../../Constants");
const TangleWireBase = require("../setV13/TangleWire");

class TangleWire extends TangleWireBase {
  constructor(game) {
    super(game, "Tangle Wire", "Nemesis", "NMS");
  }
}

module.exports = TangleWire;
