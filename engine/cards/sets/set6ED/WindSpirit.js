"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindSpirit extends Card {
  constructor(game) {
    super(game, "Wind Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WindSpirit;
