"use strict";
const Constants = require ("../../../Constants");
const GrinningIgnusBase = require("../setFUT/GrinningIgnus");

class GrinningIgnus extends GrinningIgnusBase {
  constructor (game) {
    super(game, "Grinning Ignus", "Modern Masters", "MMA");
  }
}

module.exports = GrinningIgnus;
