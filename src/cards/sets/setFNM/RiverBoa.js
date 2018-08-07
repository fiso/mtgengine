"use strict";
const Constants = require ("../../../Constants");
const RiverBoaBase = require("../setDDM/RiverBoa");

class RiverBoa extends RiverBoaBase {
  constructor (game) {
    super(game, "River Boa", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = RiverBoa;
