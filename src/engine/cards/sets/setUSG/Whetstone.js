"use strict";
const Constants = require ("../../../Constants");
const WhetstoneBase = require("../setWC00/Whetstone");

class Whetstone extends WhetstoneBase {
  constructor (game) {
    super(game, "Whetstone", "Urza's Saga", "USG");
  }
}

module.exports = Whetstone;
