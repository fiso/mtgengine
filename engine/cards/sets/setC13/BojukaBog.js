"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BojukaBog extends Card {
  constructor(game) {
    super(game, "Bojuka Bog", "Commander 2013 Edition", "C13");
  }
}

module.exports = BojukaBog;
