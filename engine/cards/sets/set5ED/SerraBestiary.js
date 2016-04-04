"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerraBestiary extends Card {
  constructor(game) {
    super(game, "Serra Bestiary", "Fifth Edition", "5ED");
  }
}

module.exports = SerraBestiary;
