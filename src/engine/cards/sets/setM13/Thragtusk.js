"use strict";
const Constants = require ("../../../Constants");
const ThragtuskBase = require("../setE01/Thragtusk");

class Thragtusk extends ThragtuskBase {
  constructor (game) {
    super(game, "Thragtusk", "Magic 2013", "M13");
  }
}

module.exports = Thragtusk;
