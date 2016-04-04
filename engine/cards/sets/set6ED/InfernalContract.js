"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalContract extends Card {
  constructor(game) {
    super(game, "Infernal Contract", "Classic Sixth Edition", "6ED");
  }
}

module.exports = InfernalContract;
