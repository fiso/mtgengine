"use strict";
const Constants = require ("../../../Constants");
const FlametongueKavuBase = require("../setC14/FlametongueKavu");

class FlametongueKavu extends FlametongueKavuBase {
  constructor(game) {
    super(game, "Flametongue Kavu", "Planechase", "HOP");
  }
}

module.exports = FlametongueKavu;
