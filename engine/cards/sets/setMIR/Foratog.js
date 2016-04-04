"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForatogBase = require("../set8ED/Foratog.js");

class Foratog extends ForatogBase {
  constructor(game) {
    super(game, "Foratog", "Mirage", "MIR");
  }
}

module.exports = Foratog;
