"use strict";
const Constants = require ("../../../Constants");
const KingCheetahBase = require("../setMGB/KingCheetah");

class KingCheetah extends KingCheetahBase {
  constructor(game) {
    super(game, "King Cheetah", "Visions", "VIS");
  }
}

module.exports = KingCheetah;
