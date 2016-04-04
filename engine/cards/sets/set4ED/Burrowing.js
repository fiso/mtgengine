"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurrowingBase = require("../set6ED/Burrowing.js");

class Burrowing extends BurrowingBase {
  constructor(game) {
    super(game, "Burrowing", "Fourth Edition", "4ED");
  }
}

module.exports = Burrowing;
