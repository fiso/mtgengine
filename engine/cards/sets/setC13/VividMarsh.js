"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VividMarsh extends Card {
  constructor(game) {
    super(game, "Vivid Marsh", "Commander 2013 Edition", "C13");
  }
}

module.exports = VividMarsh;
