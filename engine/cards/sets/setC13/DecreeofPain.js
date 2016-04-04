"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DecreeofPain extends Card {
  constructor(game) {
    super(game, "Decree of Pain", "Commander 2013 Edition", "C13");
  }
}

module.exports = DecreeofPain;
