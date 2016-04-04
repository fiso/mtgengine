"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrensRunPackmasterBase = require("../setC14/WrensRunPackmaster.js");

class WrensRunPackmaster extends WrensRunPackmasterBase {
  constructor(game) {
    super(game, "Wren's Run Packmaster", "Lorwyn", "LRW");
  }
}

module.exports = WrensRunPackmaster;
