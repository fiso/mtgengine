"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fissure extends Card {
  constructor(game) {
    super(game, "Fissure", "Fourth Edition", "4ED");
  }
}

module.exports = Fissure;
