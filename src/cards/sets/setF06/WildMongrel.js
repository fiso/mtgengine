"use strict";
const Constants = require ("../../../Constants");
const WildMongrelBase = require("../setGVL/WildMongrel");

class WildMongrel extends WildMongrelBase {
  constructor (game) {
    super(game, "Wild Mongrel", "Friday Night Magic 2006", "F06");
  }
}

module.exports = WildMongrel;
