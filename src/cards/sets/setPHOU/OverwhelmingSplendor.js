"use strict";
const Constants = require ("../../../Constants");
const OverwhelmingSplendorBase = require("../setHOU/OverwhelmingSplendor");

class OverwhelmingSplendor extends OverwhelmingSplendorBase {
  constructor (game) {
    super(game, "Overwhelming Splendor", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = OverwhelmingSplendor;
