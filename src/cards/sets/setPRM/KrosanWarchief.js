"use strict";
const Constants = require ("../../../Constants");
const KrosanWarchiefBase = require("../setC13/KrosanWarchief");

class KrosanWarchief extends KrosanWarchiefBase {
  constructor (game) {
    super(game, "Krosan Warchief", "Magic Online Promos", "PRM");
  }
}

module.exports = KrosanWarchief;
