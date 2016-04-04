"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingGourna extends Card {
  constructor(game) {
    super(game, "Spitting Gourna", "Onslaught", "ONS");
  }
}

module.exports = SpittingGourna;
