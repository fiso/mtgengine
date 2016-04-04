"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzoriusChancery extends Card {
  constructor(game) {
    super(game, "Azorius Chancery", "Commander 2013 Edition", "C13");
  }
}

module.exports = AzoriusChancery;
