"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flare extends Card {
  constructor(game) {
    super(game, "Flare", "Fifth Edition", "5ED");
  }
}

module.exports = Flare;
