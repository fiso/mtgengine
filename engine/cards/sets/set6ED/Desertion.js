"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Desertion extends Card {
  constructor(game) {
    super(game, "Desertion", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Desertion;
