"use strict";
const Constants = require ("../../../Constants");
const PhyrexianProcessorBase = require("../setDDE/PhyrexianProcessor");

class PhyrexianProcessor extends PhyrexianProcessorBase {
  constructor(game) {
    super(game, "Phyrexian Processor", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianProcessor;
