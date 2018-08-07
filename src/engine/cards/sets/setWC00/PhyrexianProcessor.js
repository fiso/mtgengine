"use strict";
const Constants = require ("../../../Constants");
const PhyrexianProcessorBase = require("../setV16/PhyrexianProcessor");

class PhyrexianProcessor extends PhyrexianProcessorBase {
  constructor (game) {
    super(game, "Phyrexian Processor", "World Championship Decks 2000", "WC00");
  }
}

module.exports = PhyrexianProcessor;
