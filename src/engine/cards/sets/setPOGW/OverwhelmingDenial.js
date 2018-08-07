"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingDenialBase = require("../setOGW/OverwhelmingDenial");

class OverwhelmingDenial extends OverwhelmingDenialBase {
  constructor (game) {
    super(game, "Overwhelming Denial", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = OverwhelmingDenial;
