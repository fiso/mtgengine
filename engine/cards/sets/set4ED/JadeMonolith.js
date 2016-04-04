"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JadeMonolithBase = require("../set6ED/JadeMonolith.js");

class JadeMonolith extends JadeMonolithBase {
  constructor(game) {
    super(game, "Jade Monolith", "Fourth Edition", "4ED");
  }
}

module.exports = JadeMonolith;
