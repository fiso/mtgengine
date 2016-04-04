"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Abomination extends Card {
  constructor(game) {
    super(game, "Abomination", "Fourth Edition", "4ED");
  }
}

module.exports = Abomination;
