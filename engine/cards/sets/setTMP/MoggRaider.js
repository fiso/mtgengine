"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggRaiderBase = require("../setATH/MoggRaider.js");

class MoggRaider extends MoggRaiderBase {
  constructor(game) {
    super(game, "Mogg Raider", "Tempest", "TMP");
  }
}

module.exports = MoggRaider;
