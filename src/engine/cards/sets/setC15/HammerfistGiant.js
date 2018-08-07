"use strict";
const Constants = require ("../../../Constants");
const HammerfistGiantBase = require("../setCM2/HammerfistGiant");

class HammerfistGiant extends HammerfistGiantBase {
  constructor (game) {
    super(game, "Hammerfist Giant", "Commander 2015", "C15");
  }
}

module.exports = HammerfistGiant;
