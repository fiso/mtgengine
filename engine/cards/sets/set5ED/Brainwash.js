"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brainwash extends Card {
  constructor(game) {
    super(game, "Brainwash", "Fifth Edition", "5ED");
  }
}

module.exports = Brainwash;
