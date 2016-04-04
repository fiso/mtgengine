"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JundCharm extends Card {
  constructor(game) {
    super(game, "Jund Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = JundCharm;
