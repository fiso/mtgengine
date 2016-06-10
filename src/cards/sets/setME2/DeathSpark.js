"use strict";
const Constants = require ("../../../Constants");
const DeathSparkBase = require("../setALL/DeathSpark");

class DeathSpark extends DeathSparkBase {
  constructor (game) {
    super(game, "Death Spark", "Masters Edition II", "ME2");
  }
}

module.exports = DeathSpark;
