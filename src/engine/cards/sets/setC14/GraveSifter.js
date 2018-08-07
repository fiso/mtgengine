"use strict";
const Constants = require ("../../../Constants");
const GraveSifterBase = require("../setCMA/GraveSifter");

class GraveSifter extends GraveSifterBase {
  constructor (game) {
    super(game, "Grave Sifter", "Commander 2014", "C14");
  }
}

module.exports = GraveSifter;
