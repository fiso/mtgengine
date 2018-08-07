"use strict";
const Constants = require ("../../../Constants");
const WildMongrelBase = require("../setGVL/WildMongrel");

class WildMongrel extends WildMongrelBase {
  constructor (game) {
    super(game, "Wild Mongrel", "Vintage Masters", "VMA");
  }
}

module.exports = WildMongrel;
