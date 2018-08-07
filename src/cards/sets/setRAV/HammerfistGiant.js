"use strict";
const Constants = require ("../../../Constants");
const HammerfistGiantBase = require("../setCM2/HammerfistGiant");

class HammerfistGiant extends HammerfistGiantBase {
  constructor (game) {
    super(game, "Hammerfist Giant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HammerfistGiant;
