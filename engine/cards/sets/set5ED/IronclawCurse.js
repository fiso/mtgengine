"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronclawCurse extends Card {
  constructor(game) {
    super(game, "Ironclaw Curse", "Fifth Edition", "5ED");
  }
}

module.exports = IronclawCurse;
