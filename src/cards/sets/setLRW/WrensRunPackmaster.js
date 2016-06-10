"use strict";
const Constants = require ("../../../Constants");
const WrensRunPackmasterBase = require("../setC14/WrensRunPackmaster");

class WrensRunPackmaster extends WrensRunPackmasterBase {
  constructor (game) {
    super(game, "Wren's Run Packmaster", "Lorwyn", "LRW");
  }
}

module.exports = WrensRunPackmaster;
