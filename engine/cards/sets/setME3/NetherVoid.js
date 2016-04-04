"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NetherVoidBase = require("../setLEG/NetherVoid.js");

class NetherVoid extends NetherVoidBase {
  constructor(game) {
    super(game, "Nether Void", "Masters Edition III", "ME3");
  }
}

module.exports = NetherVoid;
