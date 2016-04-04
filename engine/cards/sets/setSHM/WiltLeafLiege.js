"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WiltLeafLiegeBase = require("../setMM2/WiltLeafLiege.js");

class WiltLeafLiege extends WiltLeafLiegeBase {
  constructor(game) {
    super(game, "Wilt-Leaf Liege", "Shadowmoor", "SHM");
  }
}

module.exports = WiltLeafLiege;
