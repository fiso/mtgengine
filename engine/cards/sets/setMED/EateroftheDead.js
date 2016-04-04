"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EateroftheDead extends Card {
  constructor(game) {
    super(game, "Eater of the Dead", "Masters Edition", "MED");
  }
}

module.exports = EateroftheDead;
