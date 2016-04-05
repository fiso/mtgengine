"use strict";
const Constants = require ("../../../Constants");
const ReflexesBase = require("../set8ED/Reflexes");

class Reflexes extends ReflexesBase {
  constructor(game) {
    super(game, "Reflexes", "Seventh Edition", "7ED");
  }
}

module.exports = Reflexes;
