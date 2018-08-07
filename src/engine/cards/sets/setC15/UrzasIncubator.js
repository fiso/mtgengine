"use strict";
const Constants = require ("../../../Constants");
const UrzasIncubatorBase = require("../setCM2/UrzasIncubator");

class UrzasIncubator extends UrzasIncubatorBase {
  constructor (game) {
    super(game, "Urza's Incubator", "Commander 2015", "C15");
  }
}

module.exports = UrzasIncubator;
