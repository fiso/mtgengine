"use strict";
const Constants = require ("../../../Constants");
const MasterHealerBase = require("../set9ED/MasterHealer");

class MasterHealer extends MasterHealerBase {
  constructor (game) {
    super(game, "Master Healer", "Eighth Edition", "8ED");
  }
}

module.exports = MasterHealer;
