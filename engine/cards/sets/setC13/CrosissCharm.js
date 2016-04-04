"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrosissCharm extends Card {
  constructor(game) {
    super(game, "Crosis's Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = CrosissCharm;
