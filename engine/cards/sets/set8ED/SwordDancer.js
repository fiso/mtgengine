"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordDancer extends Card {
  constructor(game) {
    super(game, "Sword Dancer", "Eighth Edition", "8ED");
  }
}

module.exports = SwordDancer;
