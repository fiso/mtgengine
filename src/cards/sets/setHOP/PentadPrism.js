"use strict";
const Constants = require ("../../../Constants");
const PentadPrismBase = require("../set5DN/PentadPrism");

class PentadPrism extends PentadPrismBase {
  constructor (game) {
    super(game, "Pentad Prism", "Planechase", "HOP");
  }
}

module.exports = PentadPrism;
