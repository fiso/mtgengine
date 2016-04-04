"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulNetBase = require("../set6ED/SoulNet.js");

class SoulNet extends SoulNetBase {
  constructor(game) {
    super(game, "Soul Net", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SoulNet;
