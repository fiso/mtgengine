"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MageSlayerBase = require("../setARB/MageSlayer.js");

class MageSlayer extends MageSlayerBase {
  constructor(game) {
    super(game, "Mage Slayer", "Planechase", "HOP");
  }
}

module.exports = MageSlayer;
