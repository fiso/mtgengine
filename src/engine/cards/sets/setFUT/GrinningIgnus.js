"use strict";
const Constants = require ("../../../Constants");
const GrinningIgnusBase = require("../setMMA/GrinningIgnus");

class GrinningIgnus extends GrinningIgnusBase {
  constructor (game) {
    super(game, "Grinning Ignus", "Future Sight", "FUT");
  }
}

module.exports = GrinningIgnus;
