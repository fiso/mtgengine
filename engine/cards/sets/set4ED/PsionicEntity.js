"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsionicEntity extends Card {
  constructor(game) {
    super(game, "Psionic Entity", "Fourth Edition", "4ED");
  }
}

module.exports = PsionicEntity;
