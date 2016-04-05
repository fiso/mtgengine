"use strict";
const Constants = require ("../../../Constants");
const AfterlifeBase = require("../setC14/Afterlife");

class Afterlife extends AfterlifeBase {
  constructor(game) {
    super(game, "Afterlife", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Afterlife;
