"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Serra Paladin", "Fifth Edition", "5ED");
  }
}

module.exports = SerraPaladin;
