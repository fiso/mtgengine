"use strict";
const Constants = require ("../../../Constants");
const FlamesoftheFirebrandBase = require("../setM14/FlamesoftheFirebrand");

class FlamesoftheFirebrand extends FlamesoftheFirebrandBase {
  constructor (game) {
    super(game, "Flames of the Firebrand", "Magic 2013", "M13");
  }
}

module.exports = FlamesoftheFirebrand;
