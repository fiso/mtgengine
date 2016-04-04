"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MorkrutBansheeBase = require("../setC14/MorkrutBanshee.js");

class MorkrutBanshee extends MorkrutBansheeBase {
  constructor(game) {
    super(game, "Morkrut Banshee", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MorkrutBanshee;
