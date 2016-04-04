"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamesoftheFirebrandBase = require("../setM13/FlamesoftheFirebrand.js");

class FlamesoftheFirebrand extends FlamesoftheFirebrandBase {
  constructor(game) {
    super(game, "Flames of the Firebrand", "Magic 2014 Core Set", "M14");
  }
}

module.exports = FlamesoftheFirebrand;
