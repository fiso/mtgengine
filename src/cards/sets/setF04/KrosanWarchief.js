"use strict";
const Constants = require ("../../../Constants");
const KrosanWarchiefBase = require("../setC13/KrosanWarchief");

class KrosanWarchief extends KrosanWarchiefBase {
  constructor (game) {
    super(game, "Krosan Warchief", "Friday Night Magic 2004", "F04");
  }
}

module.exports = KrosanWarchief;
