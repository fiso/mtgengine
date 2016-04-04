"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterHealerBase = require("../set8ED/MasterHealer.js");

class MasterHealer extends MasterHealerBase {
  constructor(game) {
    super(game, "Master Healer", "Ninth Edition", "9ED");
  }
}

module.exports = MasterHealer;
