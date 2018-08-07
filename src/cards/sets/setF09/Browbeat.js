"use strict";
const Constants = require ("../../../Constants");
const BrowbeatBase = require("../setA25/Browbeat");

class Browbeat extends BrowbeatBase {
  constructor (game) {
    super(game, "Browbeat", "Friday Night Magic 2009", "F09");
  }
}

module.exports = Browbeat;
