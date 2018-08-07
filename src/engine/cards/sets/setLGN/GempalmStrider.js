"use strict";
const Constants = require ("../../../Constants");
const GempalmStriderBase = require("../setEVG/GempalmStrider");

class GempalmStrider extends GempalmStriderBase {
  constructor (game) {
    super(game, "Gempalm Strider", "Legions", "LGN");
  }
}

module.exports = GempalmStrider;
