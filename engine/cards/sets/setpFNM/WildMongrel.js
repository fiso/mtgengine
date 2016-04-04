"use strict";
const Constants = require ("../../../Constants");
const WildMongrelBase = require("../setDD3_GVL/WildMongrel");

class WildMongrel extends WildMongrelBase {
  constructor(game) {
    super(game, "Wild Mongrel", "Friday Night Magic", "pFNM");
  }
}

module.exports = WildMongrel;
