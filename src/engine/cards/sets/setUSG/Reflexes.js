"use strict";
const Constants = require ("../../../Constants");
const ReflexesBase = require("../set9ED/Reflexes");

class Reflexes extends ReflexesBase {
  constructor (game) {
    super(game, "Reflexes", "Urza's Saga", "USG");
  }
}

module.exports = Reflexes;
