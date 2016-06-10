"use strict";
const Constants = require ("../../../Constants");
const VividGroveBase = require("../setC13/VividGrove");

class VividGrove extends VividGroveBase {
  constructor (game) {
    super(game, "Vivid Grove", "Lorwyn", "LRW");
  }
}

module.exports = VividGrove;
