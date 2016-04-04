"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoilingSeas extends Card {
  constructor(game) {
    super(game, "Boiling Seas", "Ninth Edition", "9ED");
  }
}

module.exports = BoilingSeas;
