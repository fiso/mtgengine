"use strict";
const Constants = require ("../../../Constants");
const RiverBoaBase = require("../setBRB/RiverBoa");

class RiverBoa extends RiverBoaBase {
  constructor(game) {
    super(game, "River Boa", "Visions", "VIS");
  }
}

module.exports = RiverBoa;
