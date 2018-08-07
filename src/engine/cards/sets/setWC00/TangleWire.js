"use strict";
const Constants = require ("../../../Constants");
const TangleWireBase = require("../setV13/TangleWire");

class TangleWire extends TangleWireBase {
  constructor (game) {
    super(game, "Tangle Wire", "World Championship Decks 2000", "WC00");
  }
}

module.exports = TangleWire;
