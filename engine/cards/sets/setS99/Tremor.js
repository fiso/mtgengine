"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TremorBase = require("../set6ED/Tremor.js");

class Tremor extends TremorBase {
  constructor(game) {
    super(game, "Tremor", "Starter 1999", "S99");
  }
}

module.exports = Tremor;
