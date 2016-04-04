"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PanicAttack extends Card {
  constructor(game) {
    super(game, "Panic Attack", "Eighth Edition", "8ED");
  }
}

module.exports = PanicAttack;
