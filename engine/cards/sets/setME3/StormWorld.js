"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormWorldBase = require("../setLEG/StormWorld.js");

class StormWorld extends StormWorldBase {
  constructor(game) {
    super(game, "Storm World", "Masters Edition III", "ME3");
  }
}

module.exports = StormWorld;
