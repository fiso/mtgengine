"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoneWolf extends Card {
  constructor(game) {
    super(game, "Lone Wolf", "Eighth Edition", "8ED");
  }
}

module.exports = LoneWolf;
