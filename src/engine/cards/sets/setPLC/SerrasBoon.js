"use strict";
const Constants = require ("../../../Constants");
const SerrasBoonBase = require("../setDVD/SerrasBoon");

class SerrasBoon extends SerrasBoonBase {
  constructor (game) {
    super(game, "Serra's Boon", "Planar Chaos", "PLC");
  }
}

module.exports = SerrasBoon;
