"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inspirit extends Card {
  constructor(game) {
    super(game, "Inspirit", "Ninth Edition", "9ED");
  }
}

module.exports = Inspirit;
