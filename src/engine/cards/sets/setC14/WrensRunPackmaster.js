"use strict";
const Constants = require ("../../../Constants");
const WrensRunPackmasterBase = require("../setCMA/WrensRunPackmaster");

class WrensRunPackmaster extends WrensRunPackmasterBase {
  constructor (game) {
    super(game, "Wren's Run Packmaster", "Commander 2014", "C14");
  }
}

module.exports = WrensRunPackmaster;
