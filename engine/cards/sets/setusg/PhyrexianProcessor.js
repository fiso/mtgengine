"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianProcessorBase = require("../setDDE/PhyrexianProcessor.js");

class PhyrexianProcessor extends PhyrexianProcessorBase {
  constructor(game) {
    super(game, "Phyrexian Processor", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianProcessor;
