"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderousBetrayal extends Card {
  constructor(game) {
    super(game, "Murderous Betrayal", "Eighth Edition", "8ED");
  }
}

module.exports = MurderousBetrayal;
