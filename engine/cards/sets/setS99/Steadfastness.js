"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteadfastnessBase = require("../setPOR/Steadfastness.js");

class Steadfastness extends SteadfastnessBase {
  constructor(game) {
    super(game, "Steadfastness", "Starter 1999", "S99");
  }
}

module.exports = Steadfastness;
