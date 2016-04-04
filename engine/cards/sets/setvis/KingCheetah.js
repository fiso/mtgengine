"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KingCheetahBase = require("../setMGB/KingCheetah.js");

class KingCheetah extends KingCheetahBase {
  constructor(game) {
    super(game, "King Cheetah", "Visions", "VIS");
  }
}

module.exports = KingCheetah;
