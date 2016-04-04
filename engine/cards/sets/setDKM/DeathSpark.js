"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathSparkBase = require("../setALL/DeathSpark.js");

class DeathSpark extends DeathSparkBase {
  constructor(game) {
    super(game, "Death Spark", "Deckmasters", "DKM");
  }
}

module.exports = DeathSpark;
