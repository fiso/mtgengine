"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Okk extends Card {
  constructor(game) {
    super(game, "Okk", "Eighth Edition", "8ED");
  }
}

module.exports = Okk;
