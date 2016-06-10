"use strict";
const Constants = require ("../../../Constants");
const MasterHealerBase = require("../set8ED/MasterHealer");

class MasterHealer extends MasterHealerBase {
  constructor (game) {
    super(game, "Master Healer", "Ninth Edition", "9ED");
  }
}

module.exports = MasterHealer;
