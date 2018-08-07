"use strict";
const Constants = require ("../../../Constants");
const PhyrexianProcessorBase = require("../setV16/PhyrexianProcessor");

class PhyrexianProcessor extends PhyrexianProcessorBase {
  constructor (game) {
    super(game, "Phyrexian Processor", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianProcessor;
