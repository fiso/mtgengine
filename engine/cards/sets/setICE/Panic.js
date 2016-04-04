"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PanicBase = require("../set5ED/Panic.js");

class Panic extends PanicBase {
  constructor(game) {
    super(game, "Panic", "Ice Age", "ICE");
  }
}

module.exports = Panic;
