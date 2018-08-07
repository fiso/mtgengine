"use strict";
const Constants = require ("../../../Constants");
const KrosanWarchiefBase = require("../setC13/KrosanWarchief");

class KrosanWarchief extends KrosanWarchiefBase {
  constructor (game) {
    super(game, "Krosan Warchief", "Scourge", "SCG");
  }
}

module.exports = KrosanWarchief;
