"use strict";
const Constants = require ("../../../Constants");
const LightformBase = require("../setC18/Lightform");

class Lightform extends LightformBase {
  constructor (game) {
    super(game, "Lightform", "Fate Reforged", "FRF");
  }
}

module.exports = Lightform;
