"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FitofRageBase = require("../set6ED/FitofRage.js");

class FitofRage extends FitofRageBase {
  constructor(game) {
    super(game, "Fit of Rage", "Weatherlight", "WTH");
  }
}

module.exports = FitofRage;
