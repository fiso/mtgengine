"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividGroveBase = require("../setC13/VividGrove.js");

class VividGrove extends VividGroveBase {
  constructor(game) {
    super(game, "Vivid Grove", "Commander 2015", "C15");
  }
}

module.exports = VividGrove;
