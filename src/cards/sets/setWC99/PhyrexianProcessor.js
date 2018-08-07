"use strict";
const Constants = require ("../../../Constants");
const PhyrexianProcessorBase = require("../setV16/PhyrexianProcessor");

class PhyrexianProcessor extends PhyrexianProcessorBase {
  constructor (game) {
    super(game, "Phyrexian Processor", "World Championship Decks 1999", "WC99");
  }
}

module.exports = PhyrexianProcessor;
