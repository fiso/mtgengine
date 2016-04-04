"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneyardWurmBase = require("../setDDJ/BoneyardWurm.js");

class BoneyardWurm extends BoneyardWurmBase {
  constructor(game) {
    super(game, "Boneyard Wurm", "Innistrad", "ISD");
  }
}

module.exports = BoneyardWurm;
