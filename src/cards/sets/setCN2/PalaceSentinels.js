"use strict";
const Constants = require ("../../../Constants");
const PalaceSentinelsBase = require("../setPZ2/PalaceSentinels");

class PalaceSentinels extends PalaceSentinelsBase {
  constructor (game) {
    super(game, "Palace Sentinels", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PalaceSentinels;
