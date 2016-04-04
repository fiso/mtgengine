"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivingGriffin extends Card {
  constructor(game) {
    super(game, "Diving Griffin", "Eighth Edition", "8ED");
  }
}

module.exports = DivingGriffin;
