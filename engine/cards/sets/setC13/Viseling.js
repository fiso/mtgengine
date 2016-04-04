"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Viseling extends Card {
  constructor(game) {
    super(game, "Viseling", "Commander 2013 Edition", "C13");
  }
}

module.exports = Viseling;
