"use strict";
const Constants = require ("../../../Constants");
const FlickerformBase = require("../setC13/Flickerform");

class Flickerform extends FlickerformBase {
  constructor (game) {
    super(game, "Flickerform", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Flickerform;
