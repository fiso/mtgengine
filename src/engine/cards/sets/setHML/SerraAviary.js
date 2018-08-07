"use strict";
const Constants = require ("../../../Constants");
const SerraAviaryBase = require("../setME4/SerraAviary");

class SerraAviary extends SerraAviaryBase {
  constructor (game) {
    super(game, "Serra Aviary", "Homelands", "HML");
  }
}

module.exports = SerraAviary;
