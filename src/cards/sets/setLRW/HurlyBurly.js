"use strict";
const Constants = require ("../../../Constants");
const HurlyBurlyBase = require("../setCN2/HurlyBurly");

class HurlyBurly extends HurlyBurlyBase {
  constructor (game) {
    super(game, "Hurly-Burly", "Lorwyn", "LRW");
  }
}

module.exports = HurlyBurly;
