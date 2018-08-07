"use strict";
const Constants = require ("../../../Constants");
const ReflexesBase = require("../set9ED/Reflexes");

class Reflexes extends ReflexesBase {
  constructor (game) {
    super(game, "Reflexes", "Eighth Edition", "8ED");
  }
}

module.exports = Reflexes;
