"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Propaganda extends Card {
  constructor(game) {
    super(game, "Propaganda", "Commander 2013 Edition", "C13");
  }
}

module.exports = Propaganda;
