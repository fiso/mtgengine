"use strict";
const Constants = require ("../../../Constants");
const WiltLeafLiegeBase = require("../setMM2/WiltLeafLiege");

class WiltLeafLiege extends WiltLeafLiegeBase {
  constructor(game) {
    super(game, "Wilt-Leaf Liege", "Shadowmoor", "SHM");
  }
}

module.exports = WiltLeafLiege;
