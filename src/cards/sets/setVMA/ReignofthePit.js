"use strict";
const Constants = require ("../../../Constants");
const ReignofthePitBase = require("../setCNS/ReignofthePit");

class ReignofthePit extends ReignofthePitBase {
  constructor (game) {
    super(game, "Reign of the Pit", "Vintage Masters", "VMA");
  }
}

module.exports = ReignofthePit;
