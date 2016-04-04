"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CompositeGolemBase = require("../set5DN/CompositeGolem.js");

class CompositeGolem extends CompositeGolemBase {
  constructor(game) {
    super(game, "Composite Golem", "Tenth Edition", "10E");
  }
}

module.exports = CompositeGolem;
