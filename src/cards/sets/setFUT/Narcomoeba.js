"use strict";
const Constants = require ("../../../Constants");
const NarcomoebaBase = require("../setMMA/Narcomoeba");

class Narcomoeba extends NarcomoebaBase {
  constructor (game) {
    super(game, "Narcomoeba", "Future Sight", "FUT");
  }
}

module.exports = Narcomoeba;
