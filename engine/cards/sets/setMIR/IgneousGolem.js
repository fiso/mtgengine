"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IgneousGolem extends Card {
  constructor(game) {
    super(game, "Igneous Golem", "Mirage", "MIR");
  }
}

module.exports = IgneousGolem;
