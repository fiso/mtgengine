"use strict";
const Constants = require ("../../../Constants");
const CloudformBase = require("../setC18/Cloudform");

class Cloudform extends CloudformBase {
  constructor (game) {
    super(game, "Cloudform", "Fate Reforged", "FRF");
  }
}

module.exports = Cloudform;
