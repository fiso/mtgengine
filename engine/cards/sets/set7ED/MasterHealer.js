"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterHealerBase = require("../set8ED/MasterHealer.js");

class MasterHealer extends MasterHealerBase {
  constructor(game) {
    super(game, "Master Healer", "Seventh Edition", "7ED");
  }
}

module.exports = MasterHealer;
