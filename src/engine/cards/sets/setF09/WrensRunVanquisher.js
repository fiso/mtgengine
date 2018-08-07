"use strict";
const Constants = require ("../../../Constants");
const WrensRunVanquisherBase = require("../setEVG/WrensRunVanquisher");

class WrensRunVanquisher extends WrensRunVanquisherBase {
  constructor (game) {
    super(game, "Wren's Run Vanquisher", "Friday Night Magic 2009", "F09");
  }
}

module.exports = WrensRunVanquisher;
