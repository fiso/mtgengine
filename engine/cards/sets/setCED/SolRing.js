"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolRing extends Card {
  constructor(game) {
    super(game, "Sol Ring", "Collector's Edition", "CED");
  }
}

module.exports = SolRing;
