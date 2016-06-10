"use strict";
const Constants = require ("../../../Constants");
const MistmeadowSkulkBase = require("../setFUT/MistmeadowSkulk");

class MistmeadowSkulk extends MistmeadowSkulkBase {
  constructor (game) {
    super(game, "Mistmeadow Skulk", "Shadowmoor", "SHM");
  }
}

module.exports = MistmeadowSkulk;
