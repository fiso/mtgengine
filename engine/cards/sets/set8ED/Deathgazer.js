"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deathgazer extends Card {
  constructor(game) {
    super(game, "Deathgazer", "Eighth Edition", "8ED");
  }
}

module.exports = Deathgazer;
