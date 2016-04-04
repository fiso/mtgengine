"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricSpirit extends Card {
  constructor(game) {
    super(game, "Vampiric Spirit", "Eighth Edition", "8ED");
  }
}

module.exports = VampiricSpirit;
