"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeceiverExarch extends Card {
  constructor(game) {
    super(game, "Deceiver Exarch", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeceiverExarch;
