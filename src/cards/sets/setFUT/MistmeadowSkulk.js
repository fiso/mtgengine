"use strict";
const Constants = require ("../../../Constants");
const MistmeadowSkulkBase = require("../setSHM/MistmeadowSkulk");

class MistmeadowSkulk extends MistmeadowSkulkBase {
  constructor (game) {
    super(game, "Mistmeadow Skulk", "Future Sight", "FUT");
  }
}

module.exports = MistmeadowSkulk;
