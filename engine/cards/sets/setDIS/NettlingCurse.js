"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NettlingCurse extends Card {
  constructor(game) {
    super(game, "Nettling Curse", "Dissension", "DIS");
  }
}

module.exports = NettlingCurse;
