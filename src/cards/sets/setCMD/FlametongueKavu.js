"use strict";
const Constants = require ("../../../Constants");
const FlametongueKavuBase = require("../setC14/FlametongueKavu");

class FlametongueKavu extends FlametongueKavuBase {
  constructor (game) {
    super(game, "Flametongue Kavu", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FlametongueKavu;
