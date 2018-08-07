"use strict";
const Constants = require ("../../../Constants");
const GladehartCavalryBase = require("../setDDU/GladehartCavalry");

class GladehartCavalry extends GladehartCavalryBase {
  constructor (game) {
    super(game, "Gladehart Cavalry", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = GladehartCavalry;
