"use strict";
const Constants = require ("../../../Constants");
const ShivBase = require("../setPCA/Shiv");

class Shiv extends ShivBase {
  constructor (game) {
    super(game, "Shiv", "Planechase", "HOP");
  }
}

module.exports = Shiv;
