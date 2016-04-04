"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thundermare extends Card {
  constructor(game) {
    super(game, "Thundermare", "Ninth Edition", "9ED");
  }
}

module.exports = Thundermare;
