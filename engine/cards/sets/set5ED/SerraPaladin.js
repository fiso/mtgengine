"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerraPaladin extends Card {
  constructor(game) {
    super(game, "Serra Paladin", "Fifth Edition", "5ED");
  }
}

module.exports = SerraPaladin;
