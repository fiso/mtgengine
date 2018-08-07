"use strict";
const Constants = require ("../../../Constants");
const FlametongueKavuBase = require("../setCM2/FlametongueKavu");

class FlametongueKavu extends FlametongueKavuBase {
  constructor (game) {
    super(game, "Flametongue Kavu", "Friday Night Magic 2005", "F05");
  }
}

module.exports = FlametongueKavu;
