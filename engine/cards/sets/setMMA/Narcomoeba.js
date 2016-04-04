"use strict";
const Constants = require ("../../../Constants");
const NarcomoebaBase = require("../setFUT/Narcomoeba");

class Narcomoeba extends NarcomoebaBase {
  constructor(game) {
    super(game, "Narcomoeba", "Modern Masters", "MMA");
  }
}

module.exports = Narcomoeba;
