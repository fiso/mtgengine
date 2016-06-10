"use strict";
const Constants = require ("../../../Constants");
const WildMongrelBase = require("../setDD3_GVL/WildMongrel");

class WildMongrel extends WildMongrelBase {
  constructor (game) {
    super(game, "Wild Mongrel", "Odyssey", "ODY");
  }
}

module.exports = WildMongrel;
