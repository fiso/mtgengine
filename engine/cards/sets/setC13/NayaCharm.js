"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NayaCharm extends Card {
  constructor(game) {
    super(game, "Naya Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = NayaCharm;
