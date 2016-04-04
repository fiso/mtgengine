"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AutumnWillowBase = require("../setHML/AutumnWillow.js");

class AutumnWillow extends AutumnWillowBase {
  constructor(game) {
    super(game, "Autumn Willow", "Masters Edition", "MED");
  }
}

module.exports = AutumnWillow;
