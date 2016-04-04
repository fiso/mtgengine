"use strict";
const Constants = require ("../../../Constants");
const KingCheetahBase = require("../setMGB/KingCheetah");

class KingCheetah extends KingCheetahBase {
  constructor(game) {
    super(game, "King Cheetah", "Ninth Edition", "9ED");
  }
}

module.exports = KingCheetah;
