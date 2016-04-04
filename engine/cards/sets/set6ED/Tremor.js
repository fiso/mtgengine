"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tremor extends Card {
  constructor(game) {
    super(game, "Tremor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tremor;
