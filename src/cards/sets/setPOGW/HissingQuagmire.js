"use strict";
const Constants = require ("../../../Constants");
const HissingQuagmireBase = require("../setOGW/HissingQuagmire");

class HissingQuagmire extends HissingQuagmireBase {
  constructor (game) {
    super(game, "Hissing Quagmire", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = HissingQuagmire;
