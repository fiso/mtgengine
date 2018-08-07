"use strict";
const Constants = require ("../../../Constants");
const GloryBase = require("../setWC02/Glory");

class Glory extends GloryBase {
  constructor (game) {
    super(game, "Glory", "Judgment", "JUD");
  }
}

module.exports = Glory;
