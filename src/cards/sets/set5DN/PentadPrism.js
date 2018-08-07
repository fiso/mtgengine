"use strict";
const Constants = require ("../../../Constants");
const PentadPrismBase = require("../setHOP/PentadPrism");

class PentadPrism extends PentadPrismBase {
  constructor (game) {
    super(game, "Pentad Prism", "Fifth Dawn", "5DN");
  }
}

module.exports = PentadPrism;
