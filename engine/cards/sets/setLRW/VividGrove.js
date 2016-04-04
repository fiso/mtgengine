"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividGroveBase = require("../setC13/VividGrove.js");

class VividGrove extends VividGroveBase {
  constructor(game) {
    super(game, "Vivid Grove", "Lorwyn", "LRW");
  }
}

module.exports = VividGrove;
