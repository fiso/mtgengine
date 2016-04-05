"use strict";
const Constants = require ("../../../Constants");
const SerraAviaryBase = require("../setHML/SerraAviary");

class SerraAviary extends SerraAviaryBase {
  constructor(game) {
    super(game, "Serra Aviary", "Masters Edition IV", "ME4");
  }
}

module.exports = SerraAviary;
