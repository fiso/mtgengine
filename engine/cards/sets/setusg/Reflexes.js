"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReflexesBase = require("../set8ED/Reflexes.js");

class Reflexes extends ReflexesBase {
  constructor(game) {
    super(game, "Reflexes", "Urza's Saga", "USG");
  }
}

module.exports = Reflexes;
