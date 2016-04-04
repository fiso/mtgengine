"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TripWireBase = require("../setME3/TripWire.js");

class TripWire extends TripWireBase {
  constructor(game) {
    super(game, "Trip Wire", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TripWire;
