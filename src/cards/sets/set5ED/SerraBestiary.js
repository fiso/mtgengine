"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraBestiary extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Bestiary", "Fifth Edition", "5ED");
  }
}

module.exports = SerraBestiary;
