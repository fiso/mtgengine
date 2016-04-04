"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindsofChange extends Card {
  constructor(game) {
    super(game, "Winds of Change", "Fifth Edition", "5ED");
  }
}

module.exports = WindsofChange;
