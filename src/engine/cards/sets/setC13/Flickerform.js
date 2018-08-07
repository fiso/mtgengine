"use strict";
const Constants = require ("../../../Constants");
const FlickerformBase = require("../setCMA/Flickerform");

class Flickerform extends FlickerformBase {
  constructor (game) {
    super(game, "Flickerform", "Commander 2013", "C13");
  }
}

module.exports = Flickerform;
