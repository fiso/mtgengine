"use strict";
const Constants = require ("../../../Constants");
const WrensRunPackmasterBase = require("../setCMA/WrensRunPackmaster");

class WrensRunPackmaster extends WrensRunPackmasterBase {
  constructor (game) {
    super(game, "Wren's Run Packmaster", "Magic Online Promos", "PRM");
  }
}

module.exports = WrensRunPackmaster;
