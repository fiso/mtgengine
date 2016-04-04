"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Solidarity extends Card {
  constructor(game) {
    super(game, "Solidarity", "Eighth Edition", "8ED");
  }
}

module.exports = Solidarity;
