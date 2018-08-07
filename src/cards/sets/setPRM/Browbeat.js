"use strict";
const Constants = require ("../../../Constants");
const BrowbeatBase = require("../setA25/Browbeat");

class Browbeat extends BrowbeatBase {
  constructor (game) {
    super(game, "Browbeat", "Magic Online Promos", "PRM");
  }
}

module.exports = Browbeat;
