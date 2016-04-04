"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosCharm extends Card {
  constructor(game) {
    super(game, "Boros Charm", "Commander 2013 Edition", "C13");
  }
}

module.exports = BorosCharm;
