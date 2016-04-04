"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jund extends Card {
  constructor(game) {
    super(game, "Jund", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Jund;
