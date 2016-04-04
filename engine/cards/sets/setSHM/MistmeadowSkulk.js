"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistmeadowSkulkBase = require("../setFUT/MistmeadowSkulk.js");

class MistmeadowSkulk extends MistmeadowSkulkBase {
  constructor(game) {
    super(game, "Mistmeadow Skulk", "Shadowmoor", "SHM");
  }
}

module.exports = MistmeadowSkulk;
