"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StranglingSootBase = require("../setDDK/StranglingSoot.js");

class StranglingSoot extends StranglingSootBase {
  constructor(game) {
    super(game, "Strangling Soot", "Time Spiral", "TSP");
  }
}

module.exports = StranglingSoot;
