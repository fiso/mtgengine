"use strict";
const Constants = require ("../../../Constants");
const VividGroveBase = require("../setC17/VividGrove");

class VividGrove extends VividGroveBase {
  constructor (game) {
    super(game, "Vivid Grove", "Modern Masters", "MMA");
  }
}

module.exports = VividGrove;
