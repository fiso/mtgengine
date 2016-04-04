"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromarsCharm extends Card {
  constructor(game) {
    super(game, "Dromar's Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = DromarsCharm;
