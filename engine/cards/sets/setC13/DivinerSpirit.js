"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivinerSpirit extends Card {
  constructor(game) {
    super(game, "Diviner Spirit", "Commander 2013 Edition", "C13");
  }
}

module.exports = DivinerSpirit;
