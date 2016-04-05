"use strict";
const Constants = require ("../../../Constants");
const StranglingSootBase = require("../setDDK/StranglingSoot");

class StranglingSoot extends StranglingSootBase {
  constructor(game) {
    super(game, "Strangling Soot", "Time Spiral", "TSP");
  }
}

module.exports = StranglingSoot;
