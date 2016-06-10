"use strict";
const Constants = require ("../../../Constants");
const UrzasIncubatorBase = require("../setC15/UrzasIncubator");

class UrzasIncubator extends UrzasIncubatorBase {
  constructor (game) {
    super(game, "Urza's Incubator", "Urza's Destiny", "UDS");
  }
}

module.exports = UrzasIncubator;
