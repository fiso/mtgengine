"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadjanSpirit extends Card {
  constructor(game) {
    super(game, "Radjan Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RadjanSpirit;
