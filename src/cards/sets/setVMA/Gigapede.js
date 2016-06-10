"use strict";
const Constants = require ("../../../Constants");
const GigapedeBase = require("../setONS/Gigapede");

class Gigapede extends GigapedeBase {
  constructor (game) {
    super(game, "Gigapede", "Vintage Masters", "VMA");
  }
}

module.exports = Gigapede;
