"use strict";
const Constants = require ("../../../Constants");
const ReflexesBase = require("../set8ED/Reflexes");

class Reflexes extends ReflexesBase {
  constructor (game) {
    super(game, "Reflexes", "Ninth Edition", "9ED");
  }
}

module.exports = Reflexes;
